import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from 'next/link'

export default function Home({ dir }) {

  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" })
  const description = intl.formatMessage({ id: "page.home.head.meta.description" })
  const learningHub = intl.formatMessage({ id: "page.header.learningHub" });
  const mybcit = intl.formatMessage({ id: "page.header.mybcit" });
  const students = intl.formatMessage({ id: "page.header.students" });
  const staff = intl.formatMessage({ id: "page.header.staff" });
  const events = intl.formatMessage({ id: "page.header.events" });
  const programsCourses = intl.formatMessage({ id: "page.header.programsCourses" });
  const admission = intl.formatMessage({ id: "page.header.admission" });
  const studentServices = intl.formatMessage({ id: "page.header.studentServices" });
  const research = intl.formatMessage({ id: "page.header.research" });
  const aboutBcit = intl.formatMessage({ id: "page.header.aboutBcit" });
  const study = intl.formatMessage({ id: "page.page.study" });
  const business = intl.formatMessage({ id: "page.page.business" });
  const pageProgram = intl.formatMessage({ id: "page.page.program" });
  const programName = intl.formatMessage({ id: "page.header.programName" });
  const credential = intl.formatMessage({ id: "page.header.credential" });
  const programFormat = intl.formatMessage({ id: "page.header.programFormat" });
  const school = intl.formatMessage({ id: "page.header.school" });
  const applyNow = intl.formatMessage({ id: "page.header.applyNow" });
  const contactUs = intl.formatMessage({ id: "page.header.contactUs" });
  const about = intl.formatMessage({ id: "page.about.about" });
  const overview = intl.formatMessage({ id: "page.about.overview" });
  const entranceRequirements = intl.formatMessage({ id: "page.about.entranceRequirements" });
  const advancedPlacement = intl.formatMessage({ id: "page.about.advancedPlacement" });
  const costsSupplies = intl.formatMessage({ id: "page.about.costsSupplies" });
  const courses = intl.formatMessage({ id: "page.about.courses" });
  const programDetails = intl.formatMessage({ id: "page.about.programDetails" });
  const graduatingJobs = intl.formatMessage({ id: "page.about.graduatingJobs" });
  const aboutContactUs = intl.formatMessage({ id: "page.about.contactUs" });
  const subscribe = intl.formatMessage({ id: "page.about.subscribe" });
  const infoSessions = intl.formatMessage({ id: "page.info.infoSessions" });
  const attend = intl.formatMessage({ id: "page.info.attend" });
  const dateOne = intl.formatMessage({ id: "page.info.dateOne" });
  const dateTwo = intl.formatMessage({ id: "page.info.dateTwo" });
  const dateThree = intl.formatMessage({ id: "page.info.dateThree" });
  const dateFour = intl.formatMessage({ id: "page.info.dateFour" });
  const exploreSessions = intl.formatMessage({ id: "page.info.exploreSessions" });
  const exploreSessionsTwo = intl.formatMessage({ id: "page.info.exploreSessionsTwo" });
  const programOverview = intl.formatMessage({ id: "page.info.programOverview" });
  const infocredential = intl.formatMessage({ id: "page.info.credential" });
  const infocredentialTwo = intl.formatMessage({ id: "page.info.infocredentialTwo" });
  const format = intl.formatMessage({ id: "page.info.format" });
  const formatTwo = intl.formatMessage({ id: "page.info.formatTwo" });
  const length = intl.formatMessage({ id: "page.info.length" });
  const lengthTwo = intl.formatMessage({ id: "page.info.lengthTwo" });
  const startDate = intl.formatMessage({ id: "page.info.startDate" });
  const startDateTwo = intl.formatMessage({ id: "page.info.startDateTwo" });
  const campus = intl.formatMessage({ id: "page.info.campus" });
  const campusTwo = intl.formatMessage({ id: "page.info.campusTwo" });
  const domesticTuition = intl.formatMessage({ id: "page.info.domesticTuition" });
  const domesticTuitionTwo = intl.formatMessage({ id: "page.info.domesticTuitionTwo" });
  const internationalTuition = intl.formatMessage({ id: "page.info.internationalTuition" });
  const internationalTuitionTwo = intl.formatMessage({ id: "page.info.internationalTuitionTwo" });
  const costEstimate = intl.formatMessage({ id: "page.info.costEstimate" });
  const allBusinessMediaPrograms = intl.formatMessage({ id: "page.info.allBusinessMediaPrograms" });
  const recentlyVisitedPrograms = intl.formatMessage({ id: "page.info.recentlyVisitedPrograms" });
  const detailTitle = intl.formatMessage({ id: "page.detail.title" });
  const detailDescription = intl.formatMessage({ id: "page.detail.description" });
  const detailJob = intl.formatMessage({ id: "page.detail.job" });
  const mobileContent = intl.formatMessage({ id: "page.detail.mobileContent" });
  const internetMarketing = intl.formatMessage({ id: "page.detail.internetMarketing" });
  const digitalMedia = intl.formatMessage({ id: "page.detail.digitalMedia" });
  const webMobile = intl.formatMessage({ id: "page.detail.webMobile" });
  const interfaceDesigner = intl.formatMessage({ id: "page.detail.interfaceDesigner" });
  const gameUserInterfaceDesigner = intl.formatMessage({ id: "page.detail.gameUserInterfaceDesigner" });
  const projectManager = intl.formatMessage({ id: "page.detail.projectManager" });
  const digitalMediaManager = intl.formatMessage({ id: "page.detail.digitalMediaManager" });
  const digitalMediaProducer = intl.formatMessage({ id: "page.detail.digitalMediaProducer" });
  const webDevelopmentManager = intl.formatMessage({ id: "page.detail.webDevelopmentManager" });
  const dynamicMediaDesigner = intl.formatMessage({ id: "page.detail.dynamicMediaDesigner" });
  const digitalMediaProductDesigner = intl.formatMessage({ id: "page.detail.digitalMediaProductDesigner" });
  const subTitle = intl.formatMessage({ id: "page.detail.subTitle" });
  const descriptionTwoA = intl.formatMessage({ id: "page.detail.descriptionTwoA" });
  const descriptionTwoB = intl.formatMessage({ id: "page.detail.descriptionTwoB" });
  const descriptionTwoC = intl.formatMessage({ id: "page.detail.descriptionTwoC" });
  const descriptionThreeA = intl.formatMessage({ id: "page.detail.descriptionThreeA" });
  const descriptionThreeB = intl.formatMessage({ id: "page.detail.descriptionThreeB" });
  const descriptionThreeC = intl.formatMessage({ id: "page.detail.descriptionThreeC" });
  const program = intl.formatMessage({ id: "page.detail.program" });
  const back = intl.formatMessage({ id: "page.detail.back" });
  const buttonOne = intl.formatMessage({ id: "page.detail.buttonOne" });
  const next = intl.formatMessage({ id: "page.detail.next" });
  const buttonTwo = intl.formatMessage({ id: "page.detail.buttonTwo" });
  const endline = intl.formatMessage({ id: "page.detail.endline" });
  const contact = intl.formatMessage({ id: "page.misc.contact" });
  const addressLineOne = intl.formatMessage({ id: "page.misc.addressLineOne" });
  const addressLineTwo = intl.formatMessage({ id: "page.misc.addressLineTwo" });
  const addressLineThree = intl.formatMessage({ id: "page.misc.addressLineThree" });
  const website = intl.formatMessage({ id: "page.misc.website" });
  const telephoneHeader = intl.formatMessage({ id: "page.misc.telephoneHeader" });
  const telephone = intl.formatMessage({ id: "page.misc.telephone" });
  const tollFreeHeader = intl.formatMessage({ id: "page.misc.tollFreeHeader" });
  const tollFree = intl.formatMessage({ id: "page.misc.tollFree" });
  const moreNumbers = intl.formatMessage({ id: "page.misc.moreNumbers" });
  const visit = intl.formatMessage({ id: "page.misc.visit" });
  const miscApplyNow = intl.formatMessage({ id: "page.misc.applyNow" });
  const give = intl.formatMessage({ id: "page.misc.give" });
  const news = intl.formatMessage({ id: "page.misc.news" });
  const miscEvents = intl.formatMessage({ id: "page.misc.events" });
  const careers = intl.formatMessage({ id: "page.misc.careers" });
  const campusInformation = intl.formatMessage({ id: "page.misc.campusInformation" });
  const burnabyCampus = intl.formatMessage({ id: "page.misc.burnabyCampus" });
  const downtownCampus = intl.formatMessage({ id: "page.misc.downtownCampus" });
  const marineCampus = intl.formatMessage({ id: "page.misc.marineCampus" });
  const aerospaceTechnologyCampus = intl.formatMessage({ id: "page.misc.aerospaceTechnologyCampus" });
  const annacisIslandCampus = intl.formatMessage({ id: "page.misc.annacisIslandCampus" });
  const feedback = intl.formatMessage({ id: "page.misc.feedback" });
  const copyright = intl.formatMessage({ id: "page.misc.copyright" });
  const privacy = intl.formatMessage({ id: "page.misc.privacy" });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
        <link rel="icon" href="/favicon.ico" hrefLang="fr" />
      </Head>
      <header className={styles.header}>
        <div className={styles.translation}>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </div>
        <section className={styles.subMenu}>
          <div className={styles.leftEmpty}></div>
          <div className={styles.subMenuContent}>
            <Link href="/" className={styles.subMenuTab}>{learningHub}</Link>
            <Link href="/" className={styles.subMenuTab}>{mybcit}</Link>
            <Link href="/" className={styles.subMenuTab}>{students}</Link>
            <Link href="/" className={styles.subMenuTab}>{staff}</Link>
            <Link href="/" className={styles.subMenuTab}>{events}</Link>
          </div>
          <div className={styles.rightEmpty}></div>
        </section>
        <section className={styles.menu}>
          <div className={styles.leftEmpty}></div>
          <div className={styles.menuContent}>
            <Image src={"/logo.png"} width={85} height={80} />
            <Link href="/" className={styles.menuTab}>{programsCourses}</Link>
            <Link href="/" className={styles.menuTab}>{admission}</Link>
            <Link href="/" className={styles.menuTab}>{studentServices}</Link>
            <Link href="/" className={styles.menuTab}>{research}</Link>
            <Link href="/" className={styles.menuTab}>{aboutBcit}</Link>
            <Link href="/" className={styles.menuEmpty}></Link>
            <div className={styles.menuSearch}>
              <input className={styles.menuInput} />
              <Image className={styles.menuImg} src={"/icons/search.svg"} width={20} height={20} />
            </div>
            <div className={styles.menuSearchMobile}><Image src={"/icons/search.svg"} width={30} height={30} /></div>
            <div className={styles.menuMini}><Image src={"/icons/menu.svg"} width={25} height={25} /></div>
          </div>
          <div className={styles.rightEmpty}></div>
        </section>
      </header>
      <main dir={dir} className={styles.main}>
        <section className={styles.pages}>
          <div className={styles.leftEmpty}></div>
          <div className={styles.pagesMain}>
            <div>{study}</div>
            <Image className={styles.pagesArrow} src={"/icons/right-arrow.svg"} width={10} height={10} />
            <div>{business}</div>
            <Image className={styles.pagesArrow} src={"/icons/right-arrow.svg"} width={10} height={10} />
            <div>{pageProgram}</div>
          </div>
          <div className={styles.rightEmpty}></div>
        </section>
        <section className={styles.banner}>
          <Image className={styles.bannerImg} src={"/banner.jpg"} fill />
          <div className={styles.leftEmpty}></div>
          <div className={styles.title}>
            <div className={styles.titleContent}>
              <div className={styles.titleHeading}>{programName}</div>
              <div className={styles.titleSubHeading}>
                <p>{credential}</p>
                <p>/</p>
                <p>{programFormat}</p>
                <p>/</p>
                <Link href="/">{school}</Link>
              </div>
              <div>
                <Image className={styles.titleImg} src={"/icons/print.svg"} width={20} height={20} />
                <Image className={styles.titleImg} src={"/icons/mail.svg"} width={20} height={20} />
                <Image className={styles.titleImg} src={"/icons/fb.svg"} width={20} height={20} />
                <Image className={styles.titleImg} src={"/icons/tw.svg"} width={20} height={20} />
              </div>
            </div>
            <div className={styles.titleButton}>
              <button className={styles.titleClick}>{applyNow}
                <Image className={styles.clickImg} src={"icons/arrow-forward.svg"} width={10} height={10} /></button>
              <button className={styles.titleClick}>{contactUs}
                <Image className={styles.clickImg} src={"icons/arrow-forward.svg"} width={10} height={10} /></button>
            </div>
          </div>
          <div className={styles.rightEmpty}></div>
        </section>
        <section className={styles.mainContent}>
          <div className={styles.leftEmpty}></div>
          <section className={styles.gridContent}>
            <section className={styles.about}>
              <div className={styles.topEmpty}></div>
              <div className={styles.aboutTitle}>{about}</div>
              <div className={styles.aboutContent}>
                <Link href="/">{overview}</Link>
                <Link href="/">{entranceRequirements}</Link>
                <Link href="/">{advancedPlacement}</Link>
                <Link href="/">{costsSupplies}</Link>
                <Link href="/">{courses}</Link>
                <Link href="/">{programDetails}</Link>
                <Link href="/">{graduatingJobs}</Link>
                <Link href="/">{aboutContactUs}</Link>
                <Link href="/">{subscribe}</Link>
              </div>
            </section>
            <section className={styles.info}>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>{infoSessions}</h3>
                <p>{attend}</p>
                <ul className={styles.infoList}>
                  <li><Link href="/">{dateOne}</Link></li>
                  <li><Link href="/">{dateTwo}</Link></li>
                  <li><Link href="/">{dateThree}</Link></li>
                  <li><Link href="/">{dateFour}</Link></li>
                </ul>
                <p>{exploreSessions} <Link href="/">{exploreSessionsTwo}</Link></p>
              </div>
              <div className={styles.overviewContent}>
                <h3 className={styles.infoTitle}>{programOverview}</h3>
                <ul className={styles.overviewList}>
                  <li><span className={styles.bold}>{infocredential}</span>{infocredentialTwo}</li>
                  <li><span className={styles.bold}>{format}</span>{formatTwo}</li>
                  <li><span className={styles.bold}>{length}</span>{lengthTwo}</li>
                  <li><span className={styles.bold}>{startDate}</span>{startDateTwo}</li>
                  <li><span className={styles.bold}>{campus}</span>{campusTwo}</li>
                  <li><span className={styles.bold}>{domesticTuition}</span><Link href="/">{domesticTuitionTwo}</Link></li>
                  <li><span className={styles.bold}>{internationalTuition}</span><Link href="/">{internationalTuitionTwo}</Link></li>
                  <li>{costEstimate}</li>
                </ul>
                <p><Link href="/">{allBusinessMediaPrograms}</Link></p>
              </div>
              <div className={styles.recentlyContent}>
                <h3 className={styles.infoTitle}>{recentlyVisitedPrograms}</h3>
              </div>
            </section>
            <section className={styles.details}>
              <h1 className={styles.detailsTitle}>{detailTitle}</h1>
              <p>{detailDescription}</p>
              <p>{detailJob}</p>
              <ul className={styles.detailsList}>
                <li>{mobileContent}</li>
                <li>{internetMarketing}</li>
                <li>{digitalMedia}</li>
                <li>{webMobile}</li>
                <li>{interfaceDesigner}</li>
                <li>{gameUserInterfaceDesigner}</li>
                <li>{projectManager}</li>
                <li>{digitalMediaManager}</li>
                <li>{digitalMediaProducer}</li>
                <li>{webDevelopmentManager}</li>
                <li>{dynamicMediaDesigner}</li>
                <li>{digitalMediaProductDesigner}</li>
              </ul>
              <h2>{subTitle}</h2>
              <p>{descriptionTwoA}<Link href="/">{descriptionTwoB}</Link>{descriptionTwoC}</p>
              <p>{descriptionThreeA}<Link href="/">{descriptionThreeB}</Link>{descriptionThreeC}</p>
              <ul className={styles.detailsList}>
                <li><Link href="/">{program}</Link></li>
              </ul>
              <div className={styles.detailsMisc}>
                <div className={styles.detailsLeft}>
                  <div>{back}</div>
                  <Link href="/">{buttonOne}</Link>
                </div>
                <div className={styles.detailsRight}>
                  <div>{next}</div>
                  <Link href="/">{buttonTwo}</Link>
                </div>
              </div>
              <h6>{endline}</h6>
            </section>
            <section className={styles.contact}>
              <h4 className={styles.miscTitle}>{contact}</h4>
              <p className={styles.contactContent}>{addressLineOne}</p>
              <p className={styles.contactContent}>{addressLineTwo}</p>
              <p className={styles.contactContent}>{addressLineThree}</p>
              <p className={styles.contactLink}><Link href="/">{website}</Link></p>
              <p className={styles.contactContent}>{telephoneHeader}<Link href="/">{telephone}</Link></p>
              <p className={styles.contactContent}>{tollFreeHeader}<Link href="/">{tollFree}</Link></p>
              <p className={styles.contactLink}><Link href="/">{moreNumbers}</Link></p>
              <section className={styles.social}>
                <Image className={styles.socialImg} src={"/icons/fb.svg"} width={20} height={20} />
                <Image className={styles.socialImg} src={"/icons/tw.svg"} width={20} height={20} />
                <Image className={styles.socialImg} src={"/icons/li.svg"} width={20} height={20} />
                <Image className={styles.socialImg} src={"/icons/ig.svg"} width={20} height={20} />
              </section>
            </section>
            <section className={styles.visit}>
              <Link href="/" className={styles.miscLink}>{visit}</Link>
              <Link href="/" className={styles.miscLink}>{miscApplyNow}</Link>
              <Link href="/" className={styles.miscLink}>{give}</Link>
            </section>
            <section className={styles.news}>
              <Link href="/" className={styles.miscLink}>{news}</Link>
              <Link href="/" className={styles.miscLink}>{miscEvents}</Link>
              <Link href="/" className={styles.miscLink}>{careers}</Link>
            </section>
            <section className={styles.campus}>
              <h4 className={styles.miscTitle}>{campusInformation}</h4>
              <Link href="/" className={styles.campusLink}>{burnabyCampus}</Link>
              <Link href="/" className={styles.campusLink}>{downtownCampus}</Link>
              <Link href="/" className={styles.campusLink}>{marineCampus}</Link>
              <Link href="/" className={styles.campusLink}>{aerospaceTechnologyCampus}</Link>
              <Link href="/" className={styles.campusLink}>{annacisIslandCampus}</Link>
              <div className={styles.websiteMisc}>
                <Link href="/" className={styles.websiteLink}>{feedback}</Link>
                <Link href="/" className={styles.websiteLink}>{copyright}</Link>
                <Link href="/" className={styles.websiteLink}>{privacy}</Link>
              </div>
            </section>
            <section className={styles.endlineTwo}>
              <h6>{endline}</h6>
            </section>
            <section className={styles.websiteMiscTwo}>
              <Link href="/" className={styles.websiteLink}>{feedback}</Link>
              <Link href="/" className={styles.websiteLink}>{copyright}</Link>
              <Link href="/" className={styles.websiteLink}>{privacy}</Link>
            </section>
          </section>
          <div className={styles.rightEmpty}></div>
        </section>
      </main>
    </>
  )
}
