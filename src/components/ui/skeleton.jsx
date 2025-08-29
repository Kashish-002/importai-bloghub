import { cn } from "@/lib/utils"

function Skeleton(props) {
  const { className, ...otherProps } = props
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...otherProps}
    />
  )
}

export { Skeleton }

