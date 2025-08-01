import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Knowledge from "@/components/Knowledge"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"

import { devopsHero } from "@/data/devops/hero-devops";
import { devopsKnowledgeList } from "@/data/devops/knowledge-devops"
import { devopsProjectList } from "@/data/devops/projects-devops";


const page = () => {
	return (
		<>
			<Navbar currentProfile="devops" />
			<main className="container mx-auto max-w-6xl px-4">
				<Hero heroData={devopsHero} />
				<Knowledge knowledgeData={devopsKnowledgeList} />
				<Projects projectData={devopsProjectList} />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default page