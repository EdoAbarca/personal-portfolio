import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Knowledge from "@/components/Knowledge"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import { fullstackHero } from "@/data/fullstack/hero-fullstack"
import { fullstackKnowledgeList } from "@/data/fullstack/knowledge-fullstack"
import { fullstackProjectList } from "@/data/fullstack/projects-fullstack"

const page = () => {
	return (
		<>
			<Navbar currentProfile="fullstack"/>
			<main className="container mx-auto max-w-6xl px-4">
				<Hero heroData={fullstackHero}/>
				<Knowledge knowledgeData={fullstackKnowledgeList} />
				<Projects projectData={fullstackProjectList} />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default page