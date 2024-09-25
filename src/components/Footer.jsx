import { exploreLinks, resourcesLinks, communityLinks, followLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pl-20">
            <div>
                <h3 className="text-mg font-bold mb-4">Explore</h3>
                <ul className="space-y-2">
                    {exploreLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white "  href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-mg font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white "  href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-mg font-bold mb-4">Community</h3>
                <ul className="space-y-2">
                    {communityLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white "  href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-mg font-bold mb-4">Connect</h3>
                <ul className="space-y-2">
                    {followLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white "  href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="text-sm text-neutral-500 mt-10 text-center">
            <p>&copy; {new Date().getFullYear()} Indigo, All rights reserved | BoluAduloju</p>
        </div>

    </footer>
  )
}

export default Footer