import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-none px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--color-primary)]/15 text-[var(--color-primary)] border-2 border-[var(--color-primary)]/40',
        secondary:
          'bg-[var(--color-secondary)] text-[var(--color-muted-foreground)] border-2 border-[var(--color-border)]',
        success:
          'bg-[var(--color-success)]/15 text-[var(--color-success)] border-2 border-[var(--color-success)]/40',
        outline:
          'border-2 border-[var(--color-border)] text-[var(--color-muted-foreground)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
