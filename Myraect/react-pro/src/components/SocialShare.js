import { FacebookIcon, LineIcon } from 'react-share'
import { FacebookShareButton, LineShareButton } from 'react-share'

function SocialShare(props) {
  return (
    <>
      <FacebookShareButton url={props.url}>
        <FacebookIcon iconFillColor={'black'} size={50} round={true}  />
      </FacebookShareButton>
      <LineShareButton url={props.url}>
        <LineIcon iconFillColor={'black'} size={50} borderRadius={20}  />
      </LineShareButton>
    </>
  )
}

export default SocialShare
