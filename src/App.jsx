import React from "react";
import recentPosts from "./data/recentPosts"
import BlogPostCard from "./components/BlogPostCard";

export default function App() {
    return (
        <>
        <main
            className="space-y-20 md:mt-16 md:space-y-0 px-5 py-10 max-w-md md:max-w-4xl mx-auto md:grid md:grid-cols-2 gap-12">
            <section className="text-center">
                <div className="space-y-1 mt-16 md:mt-0">
                    <h1>
                        <span className="text-gray-400">Hey there 👋</span><br/>
                        <span className="text-2xl font-bold">I am @elnaut!</span>
                    </h1>
                    <blockquote className="text-xl">
                        <p>"As a software developer, I want to make the <abbr
                            title="world">🌍</abbr> a <b>bit</b> easier"</p>
                    </blockquote>
                </div>
                <a href="#" className="inline-block btn">
                    Lets start the <abbr title="rocket">🚀</abbr>
                </a>
            </section>

            <section className="space-y-4">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold">
                        Current Mission
                    </h2>
                    <p>Building a website with tailwindcss to make the website as light 🪶 as possible.</p>
                </div>
                <div className="space-y-1">
                    <h2 className="text-xl font-bold">
                        Skills
                    </h2>
                    <ul className="list-disc pl-5">
                        <li>PHP <span className="text-gray-400">for shop-plugins and console commands&nbsp;🐘</span>
                        </li>
                        <li>HTML <span className="text-gray-400">in combination with smarty, twig, etc.</span></li>
                        <li>CSS <span className="text-gray-400">in form of LESS, sometimes SCSS&nbsp;💅</span></li>
                        <li>JS <span className="text-gray-400">as helper, not as primary language yet</span></li>
                        <li>MySql <span className="text-gray-400">for analyses, migrations and exports&nbsp;🐬</span>
                        </li>
                        <li>Docker<span className="text-gray-400">file with custom adjustments&nbsp;🐳</span></li>
                    </ul>
                </div>

                <div className="space-y-1">
                    <h2 className="text-xl font-bold">
                        Utilities
                    </h2>
                    <ul className="list-disc pl-5">
                        <li>Git <span className="text-gray-400">lets smoothly work together 🤝</span></li>
                        <li>iTerm <span className="text-gray-400">means great power 💪</span></li>
                        <li>Docker <span className="text-gray-400">instead of VM</span></li>
                        <li>PHPStorm <span className="text-gray-400">as primary code editor 🌪</span></li>
                        <li>VSCode <span className="text-gray-400">could become a favorite</span></li>
                        <li>MacOS <span className="text-gray-400">is the system I'm working with 👨‍💻</span></li>
                    </ul>
                </div>
            </section>
        </main>

        <div className="bg-gray-100">
            <div className="px-5 py-10 max-w-screen-xl mx-auto">
                <div className="max-w-md space-y-1">
                    <h2 className="text-xl font-bold">Some blog posts could go here</h2>
                    <p className="text-gray-400">The following content is only a placeholder</p>
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {recentPosts.map((post) => (
                        <BlogPostCard post={ post } key={ post.publishDate } />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}