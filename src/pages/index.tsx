import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Carousel,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Timeline,
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography,
} from "@material-tailwind/react"
import {
    BeakerIcon,
    CodeBracketIcon,
    PaintBrushIcon,
    CubeIcon,
    SpeakerWaveIcon,
    ChevronDownIcon,
    MapPinIcon,
    ClockIcon,
    CalendarIcon,
    CalendarDaysIcon,
} from "@heroicons/react/24/solid"
import Head from "next/head"
import Image from "next/image"
import BgdcNav from "~/components/BGDCNav"
import Link from "next/link"
import BgdcFooter from "~/components/BGDCFooter"
import { useState } from "react"

export default function Home() {
    return (
        <>
            <Head>
                <title>Join BGDC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BgdcNav />
            <main>
                <div
                    id="landing"
                    className="flex max-h-[110vh] min-h-[900px] flex-col items-center justify-between bg-magenta px-8 pb-16 pt-2 lg:h-[90vh]"
                >
                    <div className="flex w-full max-w-5xl flex-col items-center lg:flex-grow lg:flex-row-reverse lg:items-center lg:justify-between">
                        <Image
                            className="hidden object-center lg:block"
                            src="/expo23totebag.webp"
                            width={408}
                            height={503}
                            alt={"BGDC sticker"}
                        />
                        <Image
                            className="object-center lg:hidden"
                            src="/expo23totebag.webp"
                            width={204}
                            height={501}
                            alt={"BGDC sticker"}
                        />
                        <div className="my-5 flex max-w-[480px] flex-grow flex-col items-center gap-4 text-center lg:justify-center lg:text-left">
                            <Typography
                                variant="h1"
                                color="white"
                                className="font-serif font-medium lg:text-7xl"
                            >
                                Games are dreams to life
                            </Typography>
                            <Typography
                                variant="lead"
                                color="amber"
                                className="w-full font-semibold"
                            >
                                Binus Game Development Club
                            </Typography>
                            <Typography variant="h5" color="white" className="text-2xl font-medium">
                                A community that celebrates games and creative passion.
                            </Typography>
                            <div className="my-1 flex w-full flex-row items-center justify-center gap-x-10 px-10 lg:justify-start lg:px-0 lg:pr-20">
                                <a href="#find-us" className="flex-grow">
                                    <Button fullWidth color="cyan" size="lg" className="sm:text-xl">
                                        Find Us
                                    </Button>
                                </a>
                                <Link
                                    href="https://bgdc.itch.io/"
                                    className="flex-grow"
                                    target="_blank"
                                >
                                    <Button
                                        fullWidth
                                        color="deep-orange"
                                        size="lg"
                                        className="sm:text-xl"
                                    >
                                        Our Games
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <Typography
                        variant="h2"
                        color="white"
                        className="text-center underline lg:text-5xl"
                    >
                        OPEN FOR ALL REGIONS
                    </Typography>
                    <a className="hidden" href="#">
                        <ChevronDownIcon className="h-6 w-6" />
                    </a>
                </div>
                <div
                    id="about-bgdc"
                    className="relative flex min-h-screen flex-col items-center bg-smagenta px-5 py-20"
                >
                    <Image
                        className="left-10 top-80 hidden 2xl:absolute 2xl:block"
                        src={"/play.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <Typography
                        variant="h2"
                        className="text-center font-serif text-5xl font-medium"
                    >
                        About BGDC
                    </Typography>
                    <Typography variant="small" color="light-gray" className="text-center">
                        Play. Observe. Develop.
                    </Typography>
                    <br />
                    <div className="flex w-full max-w-3xl flex-col items-center justify-start gap-10">
                        <div className="grid h-64 w-full grid-cols-2 place-items-stretch gap-10">
                            <div>
                                <Typography
                                    variant="h3"
                                    className="mb-1 text-left font-serif font-medium"
                                >
                                    A Passion for Games
                                </Typography>
                                <Typography variant="paragraph" className="pr-5 text-justify">
                                    history. principles. who this club is for and what we do.
                                    mention the indonesian game dev industry.
                                </Typography>
                            </div>
                            <div className="w-full border">
                                <img className="object-cover" src="/" />
                            </div>
                        </div>

                        <div className="grid h-64 w-full grid-cols-2 place-items-stretch gap-10">
                            <div className="w-full border">
                                <img className="object-cover" src="/" />
                            </div>
                            <div>
                                <Typography
                                    variant="h3"
                                    className="mb-1 text-left font-serif font-medium"
                                >
                                    Community
                                </Typography>
                                <Typography variant="paragraph" className="pr-5 text-justify">
                                    {
                                        "As a Discord-based organisation, BGDC facilitates its members to interact with ease according to their interests; including art corner, our own Minecraft server, a variety of games, and networking. Every month, BGDC hosts gatherings (both online and onsite) full of fun activities."
                                    }
                                </Typography>
                            </div>
                        </div>

                        <div className="grid h-64 w-full grid-cols-2 place-items-stretch gap-10">
                            <div>
                                <Typography
                                    variant="h3"
                                    className="mb-1 text-left font-serif font-medium"
                                >
                                    Events
                                </Typography>
                                <Typography variant="paragraph" className="pr-5 text-justify">
                                    {
                                        "Indonesia’s game development industry has a great potential as its people gains fluency in technology. On 12 Januari 2015, BINUS Game Development Club (BGDC) was officially established to educate and accommodate any Binusian interested in game development."
                                    }
                                </Typography>
                            </div>
                            <div className="w-full border">
                                <img className="object-cover" src="/" />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="kelas"
                    className="relative flex flex-col items-center bg-magenta px-8 py-20"
                >
                    <Image
                        className="right-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/observe.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <div className="flex max-w-5xl flex-col gap-2">
                        <Typography
                            variant="h2"
                            className="text-center font-serif text-6xl font-medium"
                        >
                            Skill Up!
                        </Typography>
                        <Typography variant="small" color="light-gray" className="text-center">
                            Class
                        </Typography>
                        <Typography
                            variant="lead"
                            className="my-2 text-center sm:text-3xl lg:text-4xl"
                        >
                            One-time price. Unlimited access to mentors and classes for{" "}
                            <strong>all</strong> skillsets, forever*.
                        </Typography>
                        <Typography variant="small" className="w-full text-center text-gray-400">
                            *As long as BGDC exists.
                        </Typography>
                        <hr className="mx-auto my-2 h-1 max-w-md rounded border-0 bg-gray-100 md:my-4" />
                        <div className="flex flex-row flex-wrap justify-center gap-10">
                            {[
                                {
                                    icon: BeakerIcon,
                                    title: "Game Design",
                                    imageRef: "/game-design-1.png",
                                    lead: "Get Creative",
                                    description:
                                        "Discover the essence of what makes games great. Learn about mechanics, story, and other design elements through vivid case studies.",
                                },
                                {
                                    icon: CodeBracketIcon,
                                    title: "Game Programming",
                                    imageRef: "/class-prog-1.png",
                                    lead: "Four Eyes Gang",
                                    description:
                                        "This class tutors the basis of game creation that is programming in Unity, both 2D and 3D with C# language.",
                                },
                                {
                                    icon: PaintBrushIcon,
                                    title: "2D Art & Animation",
                                    imageRef: "/2d-art-1.png",
                                    lead: "Any Pen, Any Paper",
                                    description:
                                        "Our 2D class tutors on 2-dimensional fundamentals, background, character design, and implementing them into Unity.",
                                },
                                {
                                    icon: CubeIcon,
                                    title: "3D Art & Animation",
                                    imageRef: "/3d-art-1.png",
                                    lead: "Don’t Crash-",
                                    description:
                                        "Our 3D class tutors modelling with Blender, from the bottom up! Includes objects, environments, characters, and how to import them in Unity.                                    ",
                                },
                                {
                                    icon: SpeakerWaveIcon,
                                    title: "Game Sound",
                                    imageRef: "/sound-1.png",
                                    lead: "Music Galore",
                                    description:
                                        "The sound class focuses on musics and sound effects with Audacity and Ableton. Experiment on various themes and techniques to immerse the audience~",
                                },
                            ].map((element) => {
                                return (
                                    <Card
                                        key={element.title}
                                        className="w-full max-w-[36rem] flex-row"
                                    >
                                        <CardHeader
                                            shadow={false}
                                            floated={false}
                                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                                        >
                                            <Image
                                                src={element.imageRef}
                                                alt={element.title}
                                                className="h-full w-full object-cover object-left"
                                                width={1920}
                                                height={1080}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <div className="mb-4 flex flex-row items-center gap-2">
                                                <element.icon className="h-5 w-5" />
                                                <Typography
                                                    variant="h6"
                                                    color="gray"
                                                    className="uppercase"
                                                >
                                                    {element.title}
                                                </Typography>
                                            </div>
                                            <Typography
                                                variant="h4"
                                                color="blue-gray"
                                                className="mb-2"
                                            >
                                                {element.lead}
                                            </Typography>
                                            <Typography color="gray" className="mb-8 font-normal">
                                                {element.description}
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div
                    id="talent-group"
                    className="relative flex flex-col items-center bg-[#544e67] px-5 py-20"
                >
                    <Image
                        className="left-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/develop.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <div className="flex max-w-5xl flex-col gap-2">
                        <Typography
                            variant="h2"
                            className="text-center font-serif font-medium sm:text-6xl"
                        >
                            Create and Publish Games
                        </Typography>
                        <Typography variant="small" color="light-gray" className="text-center">
                            Talent Group
                        </Typography>
                        <Typography
                            variant="lead"
                            className="my-2 text-center sm:text-3xl lg:text-4xl"
                        >
                            Develop a game with a team from ideation to publishing.{" "}
                            <span className="underline">No experience required.</span>
                        </Typography>
                    </div>
                    <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                    <div className="max-w-3xl">
                        {[
                            {
                                gameTitle: "Highway Core",
                                studioName: "Lifelessplay Productions",
                                batch: "5",
                                screenshotRefs: [
                                    "/highway-core-1.png",
                                    "/highway-core-1.png",
                                    "/highway-core-3.png",
                                ],
                                description:
                                    "You are in the middle of a busy highway filled with trucks and cars. Shoot your way through an infinite horde of enemies with the various weapons that you can use! Can you set the highest score out of everyone else?",
                                itchIoLink: "https://bgdc.itch.io/highway-core",
                            },
                            {
                                gameTitle: "Shadow of the Relics",
                                studioName: "QuantumGlyph Studio",
                                batch: "6",
                                screenshotRefs: ["/wobble-1.png", "/wobble-2.png"],
                                description:
                                    "Welcome to Wobble where your life is on the edge, literally. You are on an ever-changing platform. Your goal is to keep the platform relatively stable by moving around to different spots on the platform until all of the blocks are set in stone.",
                                itchIoLink: "https://bgdc.itch.io/",
                            },
                            {
                                gameTitle: "Ruins of the Schecnavian",
                                studioName: "Protecat",
                                batch: "X",
                                screenshotRefs: ["/ruins-1.png", "/ruins-2.png"],
                                description:
                                    "You are Upin, an adventurous scavenger for ScavenGo Inc. One day, you received a task from the higher-ups to scavenge the Ruins of the Schecnavians. In order to complete the task, you are given a device that allows you to warp between worlds. With a blazing adventurous spirit, you set off to the Ruins of the Schecnavians, unaware of the horrors within. Ruins of the Schecnavians is a tile-based puzzle game where you must use a warping device to pass through obstacles to win the game.",
                                itchIoLink: "https://bgdc.itch.io/",
                            },
                        ].map((element, i) => (
                            <div key={i}>
                                <div className="flex flex-col items-center gap-3 text-center">
                                    <div>
                                        <Typography
                                            variant="h3"
                                            className="text-center font-serif font-medium sm:text-5xl"
                                        >
                                            {element.gameTitle}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="sm:text-xl"
                                        >{`${element.studioName} | Batch ${element.batch}`}</Typography>
                                    </div>
                                    <Carousel
                                        className="rounded-xl"
                                        autoplayDelay={8000 + i * 1000}
                                        autoplay
                                        loop
                                    >
                                        {element.screenshotRefs.map((ssRef, i) => (
                                            <Image
                                                key={i}
                                                src={ssRef}
                                                alt={`${
                                                    element.gameTitle
                                                }-screenshot${i.toString()}`}
                                                className="h-full w-full object-cover"
                                                width={1200}
                                                height={680}
                                            />
                                        ))}
                                    </Carousel>
                                    <Typography variant="paragraph" className="w-full text-left">
                                        {element.description}
                                    </Typography>
                                    <a href={element.itchIoLink} target="_blank">
                                        <Button className="my-2" color="orange">
                                            Try on Itch.io
                                        </Button>
                                    </a>
                                </div>
                                <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    id="find-us"
                    className="relative flex min-h-screen flex-col items-center bg-magenta px-5 py-20"
                >
                    <div className="w-full max-w-4xl">
                        <div>
                            <Typography
                                variant="h2"
                                className="text-center font-serif text-5xl font-medium"
                            >
                                {"Find Us at Expo!"}
                            </Typography>
                        </div>
                        <Tabs className="my-2" value="Online">
                            <TabsHeader
                                className="bg-background"
                                indicatorProps={{
                                    className: "bg-cyan-90 shadow-none",
                                }}
                            >
                                {[
                                    {
                                        shortLabel: "Online",
                                        fullLabel: "Online",
                                    },
                                    {
                                        shortLabel: "KMG",
                                        fullLabel: "Kemanggisan",
                                    },
                                    {
                                        shortLabel: "BDG",
                                        fullLabel: "Bandung",
                                    },
                                    {
                                        shortLabel: "AS",
                                        fullLabel: "Alam Sutera",
                                    },
                                ].map((element) => (
                                    <Tab key={element.shortLabel} value={element.shortLabel}>
                                        <Typography
                                            variant="h5"
                                            className="font-2xl font-semibold md:hidden"
                                        >
                                            {element.shortLabel}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            className="hidden text-2xl font-semibold md:block"
                                        >
                                            {element.fullLabel}
                                        </Typography>
                                    </Tab>
                                ))}
                            </TabsHeader>
                            <hr className=" my-2 h-1 w-full rounded border-0 bg-gray-100 md:my-4" />
                            <TabsBody>
                                <TabPanel value={"Online"} className="p-2">
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <Typography
                                                variant="h4"
                                                className="text-center"
                                                color="white"
                                            >
                                                Online
                                            </Typography>
                                            <a
                                                href="https://binusgdc.com/link/events"
                                                target="_blank"
                                            >
                                                <Button
                                                    size="lg"
                                                    color="orange"
                                                    className="m-1 flex items-center gap-1"
                                                >
                                                    <MapPinIcon className="h-4 w-4" />
                                                    BGDC Event Server
                                                </Button>
                                            </a>
                                        </div>
                                        <Card className="my-4 max-w-lg bg-purple-90 px-5 py-2">
                                            <Timeline className="my-4">
                                                {[
                                                    {
                                                        title: "Get to Know BGDC",
                                                        timeSub: "29th August 2023 | 19:00 - 20:30",
                                                        body: `The key to more success is to have a lot
                                                    of pillows. Put it this way, it took me
                                                    twenty five years to get these plants,
                                                    twenty five years of blood sweat and
                                                    tears, and I&apos;m never giving up,
                                                    I&apos;m just getting started. I&apos;m
                                                    up to something. Fan luv.`,
                                                    },
                                                    {
                                                        title: "Talent Group Showcase",
                                                        timeSub: "30th August 2023 | 19:00 - 20:30",
                                                        body: `The key to more success is to have a lot
                                                    of pillows. Put it this way, it took me
                                                    twenty five years to get these plants,
                                                    twenty five years of blood sweat and
                                                    tears, and I&apos;m never giving up,
                                                    I&apos;m just getting started. I&apos;m
                                                    up to something. Fan luv.`,
                                                    },
                                                    {
                                                        title: "Talent Group Showcase",
                                                        timeSub: "31st August 2023 | 19:00 - 20:30",
                                                        body: `The key to more success is to have a lot
                                                    of pillows. Put it this way, it took me
                                                    twenty five years to get these plants,
                                                    twenty five years of blood sweat and
                                                    tears, and I&apos;m never giving up,
                                                    I&apos;m just getting started. I&apos;m
                                                    up to something. Fan luv.`,
                                                    },
                                                    {
                                                        title: "Coffee Talk",
                                                        timeSub:
                                                            "1st September 2023 | 19:00 - 20:30",
                                                        body: `The key to more success is to have a lot
                                                of pillows. Put it this way, it took me
                                                twenty five years to get these plants,
                                                twenty five years of blood sweat and
                                                tears, and I&apos;m never giving up,
                                                I&apos;m just getting started. I&apos;m
                                                up to something. Fan luv.`,
                                                    },
                                                ].map((element, i, arr) => (
                                                    <TimelineItem key={i}>
                                                        {i == arr.length - 1 ? (
                                                            <></>
                                                        ) : (
                                                            <TimelineConnector />
                                                        )}
                                                        <TimelineHeader className="h-3">
                                                            <TimelineIcon />
                                                            <div>
                                                                <Typography
                                                                    variant="h6"
                                                                    color="white"
                                                                    className="leading-none"
                                                                >
                                                                    {element.title}
                                                                </Typography>
                                                            </div>
                                                        </TimelineHeader>
                                                        <TimelineBody className="pb-8">
                                                            <div className="flex flex-col justify-between">
                                                                <div className="">
                                                                    <div className="flex flex-row items-center gap-1">
                                                                        <CalendarDaysIcon
                                                                            color="white"
                                                                            className="h-5 w-5 -translate-y-0.5"
                                                                        />
                                                                        <Typography
                                                                            variant="small"
                                                                            color="white"
                                                                        >
                                                                            {element.timeSub}
                                                                        </Typography>
                                                                    </div>

                                                                    <Typography
                                                                        variant="small"
                                                                        color="white"
                                                                    >
                                                                        {element.body}
                                                                    </Typography>
                                                                </div>
                                                            </div>
                                                        </TimelineBody>
                                                    </TimelineItem>
                                                ))}
                                            </Timeline>
                                        </Card>
                                    </div>
                                </TabPanel>
                                <TabPanel value={"KMG"} className="p-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <Typography
                                            variant="h4"
                                            className="text-center"
                                            color="white"
                                        >
                                            Anggrek Campus
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="text-center text-gray-200"
                                        >
                                            Balkon Lantai 3 (#8)
                                        </Typography>
                                    </div>
                                    <Carousel className="my-4 w-full">
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src={"/position-kmg.png"}
                                            alt={"position of BGDC in kemanggisan expo"}
                                            width={1213}
                                            height={559}
                                        />
                                    </Carousel>
                                </TabPanel>
                                <TabPanel value={"BDG"} className="p-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <Typography
                                            variant="h4"
                                            className="text-center"
                                            color="white"
                                        >
                                            Bandung Campus
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="text-center text-gray-200"
                                        >
                                            Atrium Lantai 4 (#23)
                                        </Typography>
                                    </div>
                                    <Carousel className="my-4 w-full">
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src={"/position-bdg.jpg"}
                                            alt={"position of BGDC in bandung expo"}
                                            width={880}
                                            height={495}
                                        />
                                    </Carousel>
                                </TabPanel>
                                <TabPanel value={"AS"} className="p-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <Typography
                                            variant="h4"
                                            className="text-center"
                                            color="white"
                                        >
                                            Alam Sutera Campus
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="text-center text-gray-200"
                                        >
                                            GOR Alam Sutera (#35)
                                        </Typography>
                                    </div>
                                    <Carousel className="my-4 w-full">
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src={"/position-as.png"}
                                            alt={"position of BGDC in alam sutera expo"}
                                            width={1267}
                                            height={631}
                                        />
                                    </Carousel>
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
                <div id="footer"></div>
            </main>
            <BgdcFooter />
        </>
    )
}
