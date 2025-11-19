import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Remark42Comments: QuartzComponent = () => {
  return <div id="remark42"></div>
}

export default (() => Remark42Comments) satisfies QuartzComponentConstructor