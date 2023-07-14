import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {AiFillFacebook} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/vishal-singh-143a431b7/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Vishalsingh7272" target="_blank"><ImGithub/></a>
        <a href="https://www.facebook.com/profile.php?id=100007903542070&sk=photos_by" target="_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocials   