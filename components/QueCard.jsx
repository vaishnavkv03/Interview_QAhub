"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function QueCard({ post, handleEdit, handleDelete, handleTagClick }) {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  // Navigate to profile page
  const goToProfile = () => {
    if (post.creator._id === session?.user.id) {
      router.push("/profile");
    } else {
      router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
    }
  };

  // Copy question to clipboard
  const copyToClipboard = () => {
    setCopied(post.que);
    navigator.clipboard.writeText(post.que);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <article className="prompt_card">
      {/* User Info */}
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex items-center gap-3 cursor-pointer"
          onClick={goToProfile}
        >
          <Image
            src={post.creator.image || "/assets/icons/default-user.svg"}
            alt={`${post.creator.username}_avatar`}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          className="copy_btn"
          onClick={copyToClipboard}
          aria-label="Copy question"
        >
          <Image
            src={
              copied === post.que
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post.que ? "Copied!" : "Copy"}
            width={12}
            height={12}
          />
        </button>
      </div>

      {/* Question */}
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.que}</p>

      {/* Tag */}
      {post.tag && (
        <p
          className="font-inter text-sm text-blue-600 cursor-pointer"
          onClick={() => handleTagClick?.(post.tag)}
        >
          {post.tag}
        </p>
      )}

      {/* Edit & Delete (only on profile & own posts) */}
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <button
            type="button"
            className="font-inter text-sm font-bold green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="font-inter text-sm font-bold violet_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </article>
  );
}
