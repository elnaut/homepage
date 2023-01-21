import React from "react";

export default function BlogPostCard({ post }) {
    return (
        <div className="flex flex-col items-center rounded-lg space-y-3 text-center">
            <img className="h-32 w-32 flex-shrink-0 rounded-full" src={post.image.src} />
            <div className="space-y-1">
                <div className="text-blue-600 hover:text-indigo-500 font-semibold text-sm">
                    {post.publishDate}
                </div>
                <h3 className="text-lg font-semibold">{post.title}</h3>

                <p className="text-gray-400">{post.shortDescription}</p>
                <div className="text-blue-600 font-semibold text-sm">
                    {post.readingMinutes}min reading
                </div>
            </div>
        </div>
    );
}