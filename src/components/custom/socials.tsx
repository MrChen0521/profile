import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedinIn />, path: '' },
  { icon: <FaYoutube />, path: '' },
  { icon: <FaTwitter />, path: '' }
]
type SocialsProps = {
  containerStyles: string
  iconStyles: string
}
export default function Socials({ containerStyles, iconStyles }: SocialsProps) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.path} className={iconStyles} key={index}>
          {social.icon}
        </Link>
      ))}
    </div>
  )
}
