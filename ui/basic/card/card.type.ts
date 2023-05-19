import { ComponentProps } from "shared"

/** 卡片组件属性 */
export interface CardProps extends ComponentProps {
  /** 卡片标题 */
  title?: string
  /** 阴影 */
  shadow?: 'none' | 'always' | 'hover'
  /** 边框 */
  border?: boolean
}
