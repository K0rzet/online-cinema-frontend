import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.png'

const Logo: FC = () => {
	return (
		<Link href="/">
			{/* <a className="px-layout mb-10 block"> */}
				<Image
					src={logoImage}
					width={247}
					height={34}
					alt="Movie app"
					draggable={false}
				/>
			{/* </a> */}
		</Link>
	)
}

export default Logo
