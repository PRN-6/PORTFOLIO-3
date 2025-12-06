import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import profileImage from '../assets/profilephoto.jpg'
import { FaGithub, FaLinkedin, FaNode, FaReact } from 'react-icons/fa'
import { SiCss3, SiExpress, SiGmail, SiHtml5, SiJavascript, SiMongodb, SiRust, SiTailwindcss } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'
import { DotIcon } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
    const imageRef = useRef(null)
    const heroTitleRef = useRef(null)
    const heroInfoRef = useRef(null)
    const heroStackRef = useRef(null)
    const linkRef = useRef(null)
    const projectRef = useRef(null)

    useGSAP(() => {
        gsap.to(imageRef.current, { rotate: 360 })

        gsap.from(heroTitleRef.current, {
            y: 50, opacity: 0, duration: 1, ease: 'power2.out'
        })

        gsap.from(heroInfoRef.current, {
            y: 50, opacity: 0, duration: 1, ease: 'back.in'
        })

        gsap.from(heroStackRef.current, {
            z: 50, opacity: 0, duration: 1, ease: 'sine.inOut'
        })

        gsap.from(linkRef.current, {
            x: 100, opacity: 0, duration: 1, ease: 'circ.inOut'
        })

        gsap.from(projectRef.current, {
            x: 50, opacity: 0, duration: 1, ease: 'power4.out'
        })
    }, [])

    return (
        <div>
            <Navbar />

            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* LEFT SECTION */}
                <div className="w-full lg:w-1/2 p-6 lg:p-12 lg:sticky top-0">

                    {/* Image + Icons */}
                    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6">

                        {/* Profile Image */}
                        <img
                            ref={imageRef}
                            src={profileImage}
                            alt="profile"
                            className="w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover shadow-lg"
                        />

                        {/* Social Links */}
                        <div ref={linkRef} className="flex justify-center gap-6 lg:flex-col lg:gap-6 lg:ml-10 mt-10 text-gray-300">
                            <a href="https://github.com/PRN-6" className="flex items-center gap-2 hover:text-blue-300">
                                <FaGithub className="w-6 h-6" />
                                <span className="hidden lg:inline">Github</span>
                            </a>

                            <a href="https://www.linkedin.com/in/prinson-nazareth/" className="flex items-center gap-2 hover:text-blue-300">
                                <FaLinkedin className="w-6 h-6" />
                                <span className="hidden lg:inline">LinkedIn</span>
                            </a>

                            <a href="https://x.com/r_prinson66328" className="flex items-center gap-2 hover:text-blue-300">
                                <FaXTwitter className="w-6 h-6" />
                                <span className="hidden lg:inline">Twitter</span>
                            </a>

                            <a href="mailto:prinsonroyal1@gmail.com" className="flex items-center gap-2 hover:text-blue-300">
                                <SiGmail className="w-6 h-6" />
                                <span className="hidden lg:inline">prinsonroyal1@gmail.com</span>
                            </a>
                        </div>

                    </div>

                    {/* NAME */}
                    <h1
                        ref={heroTitleRef}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold pt-6 pb-4 text-center lg:text-left"
                    >
                        Prinson Royal Nazareth
                    </h1>

                    {/* INFO */}
                    <div
                        ref={heroInfoRef}
                        className= "p-4 rounded-md text-center lg:text-left"
                    >
                       
                        <h2 ref={heroInfoRef} ><span className='text-gray-300'>I'm a self-taught developer with a strong passion for building clean, user-friendly applications.</span><strong> I love learning new technologies and constantly improving my skills.</strong>
                        </h2>
                    </div>

                    {/* STACK */}
                    <h2 className="pt-6 text-center lg:text-left ">
                        <span className=' text-gray-300'>Leveling up in:</span>
                        <div
                            ref={heroStackRef}
                            className="flex flex-wrap justify-center lg:justify-start items-center gap-3 pt-3"
                        >
                            <FaReact className="w-8 h-8" /> React <DotIcon />
                            <SiExpress className="w-8 h-8" /> Express <DotIcon />
                            <FaNode className="w-8 h-8" /> Node <DotIcon />
                            <SiMongodb className="w-8 h-8" /> Mongodb <DotIcon />
                            <SiRust className="w-8 h-8" /> Rust
                        </div>
                    </h2>
                </div>

                {/* RIGHT SECTION — PROJECTS */}
                <div className="w-full lg:w-1/2 p-6 lg:p-12 h-auto lg:h-screen lg:overflow-y-auto hide-scrollbar">

                    {/* WORKING ON IT */}
                    {/* <div>
                        <h1 className="mb-6 text-2xl">Experience</h1>
                    </div> */}

                    {/* PROJECT DISPLAY SECTION */}
                    <h1 className="mb-6 text-2xl">Projects</h1>
                    <div ref={projectRef} className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-full sm:w-1/2 h-100 rounded-2xl bg-amber-900 flex items-center justify-center">
                            left
                        </div>
                        <div className="w-full sm:w-1/2 h-100 rounded-2xl bg-fuchsia-700 flex items-center justify-center">
                            right
                        </div>
                    </div>

                    {/* TECHONLOGY & TOOLS I USE */}
                        <h1 className="mt-6 text-2xl">Technologies & Tools</h1>
                    <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 mt-6 gap-12 p-5 text-gray-400">


                            <div><SiJavascript className="w-8 h-8"/>Javascript</div>
                            <div><SiExpress className="w-8 h-8"/>ExpressJS</div>
                            <div><SiTailwindcss className="w-8 h-8"/>Tailwind CSS</div>
                            <div><SiCss3 className="w-8 h-8"/>CSS</div>
                            <div><SiHtml5 className="w-8 h-8"/>Html</div>
                            <div><FaReact className="w-8 h-8" /> React </div>
                            <div><SiExpress className="w-8 h-8" />Express  </div>
                            <div><FaNode className="w-8 h-8" />Node</div>  
                            <div><SiMongodb className="w-8 h-8" />Mongodb </div> 
                            <div><SiRust className="w-8 h-8" />Rust </div>
                        
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eius esse vitae nostrum obcaecati qui voluptas quia voluptate. Amet debitis aliquam in cum sed neque beatae natus fugiat error nihil!
                    Fugiat voluptatum earum est illo dolorem minima perferendis, obcaecati et ipsa, quo perspiciatis doloribus tempore rem temporibus rerum beatae natus! Dicta consequatur reiciendis eius suscipit a repudiandae iure repellat velit.
                    Inventore reprehenderit modi unde, omnis autem pariatur assumenda? Quidem obcaecati consectetur id eveniet veritatis laboriosam distinctio, accusantium, nesciunt iure enim vero natus omnis mollitia dolor est. Sit nobis totam officiis.
                    Necessitatibus perferendis molestias, nostrum suscipit nisi itaque incidunt adipisci quis voluptate iste veritatis nobis aut nesciunt repellendus officia pariatur minus error labore aliquid tempore repudiandae rerum temporibus. Incidunt, sed exercitationem!
                    Quasi neque cupiditate, quam laborum vel aspernatur illum beatae earum at ut sapiente suscipit nulla inventore molestiae optio fuga temporibus amet! Obcaecati inventore debitis totam fugit nobis aspernatur eum cum!
                    Quo beatae aperiam nam vero! Fugiat, commodi aliquid! Maxime expedita quis dolor architecto facere possimus libero? Animi ipsam explicabo non quas, commodi alias, iure quos reiciendis ipsa harum, accusamus minus.
                    Hic inventore saepe beatae ex obcaecati! Pariatur consectetur at, aperiam exercitationem amet necessitatibus, cumque sed omnis sit id dolores quaerat a odio quae. Voluptatem fugiat voluptas sunt nulla maiores odio.
                    Totam optio officiis quod molestiae atque provident rem sequi voluptate possimus quo rerum molestias dolor cupiditate perspiciatis minima odit esse deserunt fugit porro autem ducimus, dolores cum! Quaerat, laborum veritatis.
                    Et labore quaerat quos similique? Ad veritatis ducimus voluptatum, optio impedit aperiam. Molestiae commodi asperiores mollitia et quaerat fugiat cupiditate? Nostrum assumenda corporis non, porro nesciunt iusto molestias explicabo pariatur!
                    Inventore cum sint aliquid nihil mollitia veritatis vitae rerum, molestiae consequatur. Aliquid quia fuga quaerat consectetur dolore reiciendis sit, libero expedita. Minima numquam sequi, delectus iusto veniam itaque veritatis inventore.
                    Porro, magni sapiente neque, a amet temporibus aspernatur, et ad ea iure corrupti. Ducimus quod dignissimos consequatur. Ex quam ullam maxime aliquid hic. Deleniti ea at aperiam odio aspernatur illum?
                    Dignissimos, doloremque ducimus? Nobis quidem, ipsa vero alias, voluptates eveniet voluptate repellat, neque sit voluptatum nesciunt temporibus accusantium odio ut quibusdam molestias at corporis repudiandae cumque. Voluptate deserunt a numquam.
                    Aliquid vero adipisci, eligendi tempora beatae deserunt veritatis magni nulla corrupti ut suscipit omnis laudantium nobis eius accusantium inventore quibusdam voluptas. Placeat cum dolorem necessitatibus libero voluptatum maiores dignissimos rem?
                    Enim soluta illo non vitae esse labore numquam, aliquid reiciendis nihil sapiente sequi praesentium velit ad quidem fugiat ducimus quae consequatur cum minima, quas minus fuga eligendi. Voluptatibus, doloribus dicta.
                    Labore quos nihil placeat, cupiditate similique provident. Quaerat porro hic quisquam commodi quia dicta aliquam aspernatur consectetur officiis fugit provident dolor id quis ipsum, recusandae, molestiae saepe alias cum quam?
                    Veniam architecto delectus maiores perspiciatis rem eveniet tempora amet odit? Ratione a perspiciatis similique nostrum mollitia numquam eaque, corporis rem, corrupti doloribus ipsa, eum quis. Incidunt assumenda culpa delectus nemo?
                    Unde in mollitia sed ullam omnis? Impedit ad praesentium at mollitia quaerat, cupiditate adipisci molestias. Sapiente, molestias aperiam blanditiis doloremque dolor quas culpa temporibus cum, accusantium iusto sunt tempora? Reiciendis?
                    Autem, consectetur expedita numquam animi facilis assumenda sapiente earum nihil tenetur vitae libero minima amet! Beatae quasi earum commodi, aperiam nulla, veritatis ea dolorum officiis, voluptatem porro et illum. Corporis!
                    Quibusdam voluptatum temporibus ratione iure distinctio dolorum sit, eaque quo ducimus, molestias ad doloremque voluptates et quos quasi accusantium ullam hic vel enim, porro repudiandae. Ut quibusdam maiores aut nihil.
                    Iusto omnis enim temporibus nesciunt accusantium laudantium, suscipit nulla laborum tenetur possimus rerum vel recusandae quos illo iste sapiente fugit cumque repellat exercitationem quia? Quas doloremque eum aliquam quam rerum!
                    Maxime dolor quia, reprehenderit rem culpa, esse quibusdam, a laboriosam tempora ipsam facere! Ipsam eius voluptates deleniti obcaecati voluptatem neque nam atque nulla? Similique placeat quibusdam optio dolorem ea cupiditate?
                    Vel facere, nulla sapiente molestiae eaque atque ullam quia eum nostrum accusamus officiis! Dicta nemo, incidunt aut est quidem animi quaerat perferendis deserunt quia voluptatem facere illo ut porro officiis?
                    Eligendi vel deserunt adipisci quis iusto. Praesentium doloribus omnis reiciendis, error ipsum vitae voluptatum distinctio labore, id officiis assumenda eum accusamus sequi, voluptates asperiores illo animi aliquid beatae magnam! Hic.
                    Praesentium dolore sit architecto facilis adipisci vero voluptatem temporibus quidem id, assumenda quo repellat inventore culpa aspernatur dolor necessitatibus dicta. Cum illum autem consequatur tempore eum accusamus quas ad aliquam.
                    Repudiandae quidem eius cupiditate sint consequuntur, saepe maiores, nemo a odit dolorem doloribus nisi incidunt? Doloremque earum, reiciendis quidem voluptas beatae sed ipsa molestias, voluptatem, quae ipsam illo quod odio.
                    Veniam ab perspiciatis atque, iusto, dolorum temporibus saepe quisquam dolorem laboriosam, distinctio porro! Ad fugiat quia porro alias soluta veritatis illo aut, tempore hic omnis dolores vel excepturi? Quis, ex.
                    Iusto consequatur deleniti doloribus soluta facere. Minus, aut voluptas dolorem suscipit facilis, aspernatur necessitatibus accusamus possimus corrupti architecto eveniet unde modi quaerat numquam voluptate distinctio fuga perferendis sit quibusdam dicta.
                    Similique sunt magnam recusandae eligendi suscipit consequatur, velit ad, enim veritatis pariatur necessitatibus praesentium alias. Vitae illum placeat, omnis sunt soluta fugiat consequuntur ut maxime a accusamus unde, voluptatibus est!
                    Corporis voluptas, sint consequatur necessitatibus laborum voluptate porro repellendus, facilis maxime, expedita earum eos cumque? Laudantium, accusantium quis culpa, amet quo obcaecati ea vel perferendis consectetur, reiciendis veritatis similique deleniti.
                    Quam dolor debitis distinctio quidem consequatur dignissimos neque accusantium dolores amet illo laborum, asperiores sit incidunt saepe nemo, sed eos deleniti at mollitia cupiditate ullam aspernatur? Temporibus adipisci tempora distinctio?
                    Unde molestias fugit cum quae culpa, dolores tempore sunt illo ad sint laboriosam veritatis distinctio nobis. Tenetur doloribus alias molestias obcaecati necessitatibus, saepe maxime assumenda totam, rerum consectetur nihil debitis.
                    Debitis impedit dicta itaque deserunt? Laudantium eum magni consequuntur cum impedit et non, natus quae minima esse sit sunt laboriosam placeat. Quo provident voluptas saepe. Minima sequi suscipit rerum est!
                    Corrupti blanditiis ex earum nisi sed, molestias eum odio mollitia quidem quibusdam totam natus pariatur voluptates autem, ut, harum illo tempora fugiat suscipit temporibus architecto atque veniam vero quo? Eos?
                    Labore, nemo eligendi deleniti hic magnam, nostrum commodi quos in accusantium vel incidunt culpa aliquam ipsa dolorem perferendis sapiente et modi architecto itaque? Ipsam ad impedit mollitia earum, obcaecati saepe.
                    Adipisci culpa ab ducimus laboriosam omnis reprehenderit, unde quos esse deleniti illum enim, consequuntur, dolores similique aliquam quas ullam eligendi a minima excepturi quaerat voluptatem labore. Dolor, in nostrum. Iste?
                    Veniam, corrupti? Vero, minus veritatis? Consequuntur natus et aperiam velit voluptate delectus neque nostrum nobis sint eveniet repudiandae voluptatibus quos maiores, aliquid quae assumenda facilis reprehenderit ab labore, nisi repellendus!
                    Ipsam quaerat, deserunt facilis accusamus aperiam eaque voluptas, sequi ipsum consequuntur voluptate debitis voluptatem, impedit in explicabo. Dignissimos cupiditate quidem, necessitatibus libero, eius adipisci, eum nesciunt illum cum est quod?
                    Architecto minima eum eos delectus. Illum, nihil cupiditate? Omnis quibusdam provident pariatur recusandae ipsa quia unde laborum possimus in, et nesciunt cum non tempora consectetur blanditiis facilis amet aliquid iste.
                    Obcaecati alias nulla odio libero a accusamus dignissimos ad voluptate! Enim omnis temporibus cum, debitis ab optio minus excepturi cumque modi voluptatem libero consequuntur atque repudiandae deleniti voluptatum rem impedit?
                    Pariatur est eius illum eligendi illo distinctio sapiente beatae facilis perferendis voluptatibus nesciunt atque et harum nihil, quae saepe id fugiat! Repellendus vero similique distinctio natus quis sit optio incidunt?
                    Repellat eum distinctio repudiandae perferendis expedita quidem dicta sit eveniet veniam dolorum. Laboriosam dolorum at fuga sit sapiente! Consectetur sit eos ullam enim itaque reprehenderit eligendi voluptates ipsam quis dicta!
                    Consequuntur, eaque! Molestiae sapiente in eos laboriosam doloribus sunt officiis iste reprehenderit non nulla itaque, quos, temporibus excepturi aspernatur officia maxime! Consequatur recusandae, similique nobis sit molestias saepe distinctio aut?
                    Magni placeat impedit, nihil ullam dolorem, quidem excepturi ipsa tempore enim error rerum consequatur reprehenderit commodi quasi delectus facilis animi minima! Iure molestiae est officia corrupti eligendi repellendus? Veritatis, delectus.
                    Impedit explicabo ipsum dolor incidunt harum illo iusto voluptatem quas unde nam voluptate atque perferendis, beatae corrupti est iure ex qui ea sequi aut velit non quae? Aliquam, fuga id.
                    Itaque, recusandae minus? Earum amet quam tempore quasi, placeat, non, harum molestias iusto laboriosam consequuntur quidem explicabo! Quia rerum eius maiores, culpa dolor soluta facilis accusamus maxime hic non incidunt!
                    Et id nihil eaque nam animi explicabo repellendus ea sit dolor dolores. Aperiam nobis praesentium eius soluta, provident quaerat facere inventore reprehenderit laborum voluptates quae repellat ipsa, corrupti ad. Corporis!
                    Inventore dolor officiis, ipsam atque velit corrupti hic omnis laborum nemo itaque, quas, illum vel? Eligendi, rem alias quis aperiam eius quo deserunt iste illo quam accusantium, architecto aspernatur? Aperiam.
                    In, dicta odit quae officiis architecto quis vel reiciendis voluptatum odio ut illum dignissimos aliquam fugit provident. Error tempora quibusdam optio similique odit, iure reiciendis? Consequatur consectetur nostrum velit illum?
                    Perferendis praesentium id vero ad eum iusto adipisci nostrum, at nam, aspernatur, corporis tempore? Praesentium, adipisci dicta. Voluptas molestiae cum facere perspiciatis ullam, quo dolorum doloremque voluptatum veniam, fugiat excepturi.
                    Necessitatibus recusandae distinctio voluptatibus officiis voluptatem expedita laboriosam laborum architecto nesciunt velit dicta quisquam molestias magnam labore enim ratione, cupiditate quae maiores tempore facere corporis nemo. Necessitatibus perferendis eligendi nemo?
                    Rerum vitae praesentium neque voluptas veritatis, totam quaerat qui recusandae minus hic, corporis, architecto quia cum accusamus harum amet. Iure delectus soluta, voluptatum nam omnis ad ratione deleniti ipsa iusto?
                    Esse reiciendis voluptatibus autem amet, libero odit adipisci! Doloremque, voluptas. Recusandae eum mollitia nobis aperiam laborum est explicabo odit quia, magnam esse error, iste architecto vitae nam distinctio repellat voluptatum.
                    Molestiae, ad neque corporis ullam magni voluptatibus quaerat non vel eos error tempore soluta possimus, voluptatum officiis aperiam ducimus odit saepe aliquam quisquam sapiente natus quibusdam minus pariatur libero. Id.
                    Porro tempora ducimus accusamus voluptates alias libero officia, at neque totam quis eveniet tenetur et nemo reiciendis. Earum libero cumque non velit ad nostrum nobis aliquid eius necessitatibus, voluptatum ab.
                    Hic aliquam mollitia iure laboriosam minima expedita unde inventore nisi distinctio eligendi nemo nihil non vero, blanditiis veritatis assumenda magnam eius iusto id libero rerum dolor? Praesentium expedita sapiente possimus.
                    Dolorum animi accusantium dignissimos assumenda dolores laudantium? Impedit quidem ab deleniti quis consequatur cumque, quae, obcaecati recusandae optio nobis quibusdam tempora autem odio ipsa debitis delectus eaque iusto aliquam vel?
                    Dolores, recusandae. Ad, minus. Quasi facilis quod necessitatibus asperiores cum nobis libero aliquam! Fugiat quasi iste sequi fugit dolore. Quidem expedita amet suscipit? Sapiente autem ex dolorum modi error quos!
                    Beatae reprehenderit natus veritatis nobis? Possimus consequuntur officia animi enim qui nobis modi, sint aspernatur nihil est omnis reiciendis illum non, vero consequatur fuga magnam maxime nam quibusdam similique esse.
                    Laboriosam ipsa numquam adipisci cumque quibusdam odio iure fugiat ullam commodi rem pariatur fugit odit, nesciunt earum facere alias exercitationem voluptate in molestiae provident! Quasi quos enim est dolore aspernatur.
                    Quidem qui eligendi quae architecto, sequi dolore obcaecati nulla laboriosam. Ut minima eum, odio voluptates iste fuga maiores quam vitae doloremque aliquam similique assumenda voluptatem culpa! Alias omnis quia fugiat.
                    Laboriosam ducimus explicabo numquam repellendus dolorem modi ratione, dolorum vero fugit culpa a rem vitae debitis, tempore ullam natus officia accusamus earum provident obcaecati deleniti dicta eaque. Suscipit, ipsam saepe!
                    A quaerat beatae esse mollitia quasi vel reprehenderit voluptatem. Veritatis distinctio culpa quasi quidem. Ab eos illo odit amet repellendus cum cupiditate mollitia voluptates est pariatur? Alias laboriosam ipsum et.
                    Culpa, maiores pariatur impedit laudantium sapiente iste voluptatibus, eos error incidunt officiis sequi hic dolores doloribus quis repudiandae fugiat quas sed eligendi necessitatibus, distinctio amet? Nobis inventore soluta et recusandae!
                    Quia et eveniet qui voluptate! Quasi mollitia reprehenderit nesciunt modi nisi eum perspiciatis sit doloribus adipisci. Fuga beatae itaque delectus architecto magnam explicabo, voluptatum pariatur saepe laudantium illo. Dolorum, nam?
                    Voluptates recusandae minima animi temporibus sint eum vero pariatur! Quis fugiat similique unde itaque dolorem explicabo, dolor nesciunt ex dolore suscipit blanditiis deserunt in odio iusto, id voluptatem eaque. Voluptas.
                    Corporis consectetur porro tenetur corrupti ex nesciunt architecto ullam et, iusto eius cupiditate quae, labore omnis, voluptas ipsa sed iste inventore. Quam, quisquam veniam aut illum ipsa corrupti consequuntur voluptatum?
                    Illum a corrupti nihil suscipit tempore unde amet enim asperiores libero quam dicta, veritatis incidunt quis perspiciatis labore voluptatibus sint corporis minus facere eos blanditiis! Numquam dolores odio alias recusandae?
                    Itaque eveniet expedita ratione maxime iste quod quo quis deleniti? Similique vel ipsam accusantium natus eaque facere dolore eum, hic facilis quasi amet eligendi error voluptatem debitis, unde tempora repellat.
                    Et doloribus at voluptatibus. Sequi blanditiis provident fuga dolorem, quisquam neque fugit culpa, cum aut perspiciatis animi beatae quasi natus corporis autem ratione ipsum dolor quas? Ad illum error iure!
                    Ducimus impedit tenetur amet dignissimos omnis necessitatibus porro temporibus, libero autem nihil adipisci deserunt nam asperiores, earum voluptatem esse reiciendis, commodi nobis doloribus sint officiis! Maxime ducimus molestiae corporis tenetur?
                    Aliquam molestias magni sapiente qui ut numquam voluptate rem, et impedit voluptas nisi quibusdam quos itaque quis facilis nobis beatae! Fugiat impedit aliquid repellendus perspiciatis soluta, laudantium enim illum id!
                    Quas nam suscipit ratione deleniti facilis sit ex distinctio vitae ea quasi laudantium pariatur, quo ad recusandae nobis. Eaque porro officiis fugit id, aspernatur deserunt temporibus doloribus dolore inventore accusamus!
                    Praesentium culpa ut debitis eos neque. Minus culpa natus earum numquam odio cumque sequi repellendus laboriosam iure, veritatis deserunt consectetur minima, laudantium voluptatem architecto omnis blanditiis explicabo. Incidunt, harum eum!
                    Reiciendis nesciunt fuga veniam repellat sit eius voluptatum quasi alias minima reprehenderit dolore aspernatur quo rem suscipit ab impedit, quae libero laboriosam corporis perspiciatis, necessitatibus voluptatibus. Doloremque rerum mollitia vero.
                    Beatae, totam. Quaerat dicta ducimus nam? Neque assumenda alias est nesciunt, praesentium architecto dicta doloribus! Odit amet, ratione facere dignissimos cupiditate laudantium deserunt debitis accusamus voluptatum commodi facilis explicabo inventore.
                    Cumque vitae suscipit eveniet architecto aspernatur, id, fuga minus tempore voluptatum, tenetur ea veritatis quam maxime? Exercitationem beatae, fugiat autem quibusdam quis totam saepe placeat quae nesciunt id repellat? Reiciendis?
                    Dolor, distinctio laborum aspernatur illo, dolorum recusandae sint numquam praesentium esse aut nostrum commodi necessitatibus ipsam similique est. Tenetur esse sapiente suscipit repellat molestias amet dolore sunt aut odit cum.
                    Voluptatum aliquam vitae eveniet doloremque ea, officiis obcaecati quis, quidem consectetur iste possimus! Sunt, quae dolorum nulla dolore quidem error recusandae, soluta, magni itaque placeat sed veniam ab voluptatem? Porro.
                    Commodi modi cumque excepturi laboriosam ad vel aperiam, consectetur porro tempora quas ducimus labore aut exercitationem itaque, quam atque repellat veniam earum nulla esse facere ipsa temporibus distinctio necessitatibus. Dolore.
                    Deserunt repudiandae, provident neque, labore voluptas consequatur, quibusdam dolore nostrum nihil ex at exercitationem aut autem similique cum sed tempora facilis adipisci vero tempore? Unde hic fugiat rem tempora sed!
                    Rem nostrum in ea vel iure quia officia veritatis illum voluptas omnis! Incidunt consectetur recusandae ut quis accusantium ducimus fugiat eligendi inventore quo cum voluptates tempore, nisi illum labore nesciunt.
                    Saepe doloribus qui impedit atque porro iste! Deleniti commodi ut officiis sequi, odit pariatur provident tenetur porro impedit libero! Aliquid nobis fugit, non consequuntur ad molestias culpa neque voluptatem veniam?
                    Repudiandae architecto maxime quasi nisi eos, sapiente itaque recusandae sit quidem laudantium consequatur pariatur temporibus porro quam aliquam adipisci suscipit voluptate earum dolores alias ea veniam excepturi, omnis unde? Laboriosam!
                    Minima possimus ea deserunt voluptate hic? Vitae molestias sunt sit cumque fugiat et commodi ipsum atque alias, doloribus saepe consequuntur. Ullam aliquid ipsa minima consectetur exercitationem, minus modi voluptatibus dicta!
                    Neque quod quia quis facere adipisci repellendus quibusdam. Distinctio, amet ipsum porro eveniet veniam repellendus libero officiis nihil deleniti enim, magnam voluptates voluptate. Praesentium quo itaque eum necessitatibus aliquam ipsum?
                    Incidunt facilis ex ratione ut neque at cumque suscipit unde, sunt aperiam, quidem dolore id. Deleniti magni minus numquam voluptatem nisi itaque mollitia ducimus delectus. Incidunt assumenda rem temporibus vitae.
                    Officia sit rem quasi, vero, exercitationem consectetur vel recusandae assumenda possimus iste explicabo numquam aliquam eum nostrum optio esse. Perspiciatis sapiente quam, dolor tempore consequuntur mollitia quod suscipit veniam nemo.
                    Assumenda iusto aut quia provident quidem aliquid at maiores eos voluptate facere corrupti inventore officia ducimus harum officiis impedit ab, natus ipsa nihil ut optio distinctio nulla? Vitae, quidem ut!
                    Quo harum voluptatem numquam voluptatum, minima nihil obcaecati reiciendis minus veniam eveniet doloribus. Deserunt nulla nam quod atque officiis impedit sapiente, deleniti ipsam nesciunt ipsa, ut, sit tenetur nemo dignissimos!
                    Rem, illo reiciendis est, doloribus obcaecati id fuga maiores perferendis, quasi amet vitae blanditiis hic? Nam quo harum placeat ipsum. Debitis aspernatur ducimus, odio similique quaerat placeat pariatur quae optio.
                    Tempora assumenda dignissimos praesentium quibusdam, obcaecati unde, non minima necessitatibus vel magni ad. Veniam ratione odit a, est quis ipsa provident? Voluptatum odit harum doloribus provident ea consectetur quasi ratione?
                    Quisquam eaque corporis laboriosam sed, ducimus unde esse, fuga mollitia neque voluptas eligendi dolor alias doloremque tenetur. Repudiandae accusamus dignissimos quam molestiae tempore nesciunt obcaecati, odio perferendis illo! Minima, quae.
                    In vel voluptates dignissimos, nam recusandae quidem autem adipisci sunt quis exercitationem ea fuga perspiciatis soluta nihil? Nulla, accusantium, est et praesentium magnam, natus repudiandae molestiae incidunt illum ipsum facere!
                    Quaerat quae autem sit incidunt tempore architecto unde praesentium voluptatum reprehenderit distinctio nobis id vitae minus sunt facilis, neque doloribus mollitia nam nemo et cum totam? Dolore maxime nemo illum.
                    Soluta, neque! Repellendus facere molestias asperiores error necessitatibus assumenda saepe officia labore, dignissimos corporis quo! Harum vitae ea at fugit laborum, ipsa nam, pariatur et iste deleniti nihil dolore amet.
                    Laudantium soluta beatae voluptas laborum. Repellat, quasi magni? Nostrum ea eligendi aperiam officiis obcaecati quaerat accusamus, autem alias recusandae labore nemo necessitatibus praesentium consequatur repudiandae placeat cumque aspernatur, adipisci sed!
                    Officia atque beatae nulla exercitationem libero tenetur eum doloribus minima ipsam. Quidem enim necessitatibus tenetur adipisci non, sapiente quas provident velit dolore numquam repellendus quos maiores perferendis rerum officiis explicabo?
                    Ut nesciunt ipsam aliquid eligendi aperiam assumenda laudantium. Illo excepturi rem minima eum accusantium, esse veniam nemo quaerat reprehenderit illum soluta sapiente velit incidunt, dicta minus impedit voluptate tempora explicabo?
                    Maiores, officia explicabo iste laudantium esse iusto itaque a soluta amet. Illo suscipit molestiae, voluptate dolorum cupiditate accusamus. Expedita laboriosam necessitatibus corporis saepe ab consectetur? Non harum eligendi architecto quae?
                    Temporibus optio quae repudiandae, iure esse sapiente explicabo, alias saepe animi nisi aut adipisci error rem itaque numquam sed quia necessitatibus quos nihil vitae minus! Voluptatibus ad quisquam veritatis doloribus!
                </div>

            </div>
        </div>
    )
}

export default Home
