import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						background="url(https://uploads.quarkly.io/5fa8a5982c4ef2001e31fb38/images/Screenshot%202020-11-09%20at%2002.24.53.png?v=2020-11-09T02:25:13.607Z) 50% 15%/cover"
						lg-margin-right="0"
						lg-padding-bottom="80%"
					/>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="--color-light"
						color="--light"
						mix-blend-mode="lighten"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						About me
					</Text>
					<Text
						as="h1"
						margin="0 0 16px 0"
						font="--headline1"
						lg-font="--headline2"
						color="#000000"
					>
						Si's Here.
					</Text>
					<Text
						as="p"
						margin="16px 0"
						font="--base"
						max-width="400px"
						color="#000000"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Simon Moore is an award-winning creative designer and Google-certified digital marketing expert.
						</Strong>
						{" "}
						<br />
						<br />
						He has a wealth of experience and his grey hair is the proof of it. That, and his three children: two daughters and a French bulldog. He built his first computer with his dad in the golden age of the Internet: the glorious dial-up modem era. He took his first steps into the world of graphic design in 1999.{" "}
						<br />
						<br />
						<br />
						Growing up alongside the industry in the last twenty years has given him an acute understanding of how little its ground keeps still. In a landscape that doesn’t stop moving, it is vital to stay ahead of the curve and keep at the forefront of the latest trends and technologies.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Raise your Eyebrows Because this is how it is.
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--darkL1"
				max-width="850px"
				text-decoration-line="underline"
				transition="all 4s --transitionTimingFunction-easeIn 0s"
				filter="blur(0px)"
			>
				Everyone is full of sh*t!
			</Text>
			<Text
				as="p"
				margin="16px 0"
				font="--base"
				max-width="1000px"
				color="#000000"
				width="1200px"
			>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Simon Moore is an award-winning creative designer and Google-certified digital marketing expert.
				</Strong>
				{" "}
				<br />
				<br />
				He has a wealth of experience and his grey hair is the proof of it. That, and his three children: two daughters and a French bulldog. He built his first computer with his dad in the golden age of the Internet: the glorious dial-up modem era. He took his first steps into the world of graphic design in 1999.{" "}
				<br />
				<br />
				<br />
				Growing up alongside the industry in the last twenty years has given him an acute understanding of how little its ground keeps still. In a landscape that doesn’t stop moving, it is vital to stay ahead of the curve and keep at the forefront of the latest trends and technologies.
			</Text>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1517909277968-946dd06adf1e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Excellence in everything
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Striving for perfection in everything we do. Unparalleled service for everyone.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});