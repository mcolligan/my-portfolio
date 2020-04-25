
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Separator = () => (
  <span sx={{
    alignSelf: 'center',
    position: 'relative',
    bg: theme => theme.colors.gray[2],
    width: '50%',
    height: '2px',
    my: 5,
    display: 'inline-block' }}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 32'
      width='24'
      height='32'
      sx={{
        fill: theme => theme.colors.gray[3],
        position: 'absolute',
        left: '50%',
        ml: '-12px',
        top: '-15px'
      }}>
      <path
        stroke="#fff"
        strokeWidth={6}
        d="M10.667 32l-10.667-16 10.667-16 10.667 16z"></path>
    </svg>
  </span>
)

export default Separator