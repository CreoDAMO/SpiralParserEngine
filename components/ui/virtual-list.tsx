import * as React from "react"
import { cn } from "@/lib/utils"

interface VirtualListProps<T> {
  items: T[]
  itemHeight: number
  containerHeight: number
  renderItem: (item: T, index: number) => React.ReactNode
  className?: string
  overscan?: number
  onScroll?: (scrollTop: number) => void
}

export function VirtualList<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  className,
  overscan = 5,
  onScroll,
}: VirtualListProps<T>) {
  const [scrollTop, setScrollTop] = React.useState(0)
  const scrollElementRef = React.useRef<HTMLDivElement>(null)

  const totalHeight = items.length * itemHeight
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  )

  const visibleItems = React.useMemo(() => {
    const result = []
    for (let i = startIndex; i <= endIndex; i++) {
      result.push({
        index: i,
        item: items[i],
        offsetY: i * itemHeight,
      })
    }
    return result
  }, [items, startIndex, endIndex, itemHeight])

  const handleScroll = React.useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const scrollTop = e.currentTarget.scrollTop
      setScrollTop(scrollTop)
      onScroll?.(scrollTop)
    },
    [onScroll]
  )

  return (
    <div
      ref={scrollElementRef}
      className={cn(
        "overflow-auto scrollbar-thin scrollbar-track-muted scrollbar-thumb-muted-foreground",
        className
      )}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map(({ index, item, offsetY }) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: offsetY,
              left: 0,
              right: 0,
              height: itemHeight,
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  )
}

// Specialized virtual list for transactions
interface VirtualTransactionListProps {
  transactions: any[]
  onTransactionClick?: (transaction: any) => void
  className?: string
}

export function VirtualTransactionList({
  transactions,
  onTransactionClick,
  className,
}: VirtualTransactionListProps) {
  const renderTransaction = React.useCallback(
    (transaction: any, index: number) => (
      <div
        key={transaction.id || index}
        className="flex items-center justify-between p-3 border-b border-gray-700/50 cursor-pointer hover:bg-gray-800/30 transition-colors"
        onClick={() => onTransactionClick?.(transaction)}
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center">
            <span className="text-xs text-purple-300">
              {transaction.type?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <div className="text-sm text-white">
              {transaction.type} {transaction.currency}
            </div>
            <div className="text-xs text-gray-400">
              {transaction.timestamp?.toLocaleTimeString()}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-white">
            {transaction.type === 'send' ? '-' : '+'}
            {transaction.amount} {transaction.currency}
          </div>
          <div className="text-xs text-gray-400">
            {transaction.status}
          </div>
        </div>
      </div>
    ),
    [onTransactionClick]
  )

  return (
    <VirtualList
      items={transactions}
      itemHeight={72} // Height of each transaction row
      containerHeight={300} // Container height
      renderItem={renderTransaction}
      className={className}
    />
  )
}

export type { VirtualListProps }