"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const featuredFilms = [
  {
    title: "The Last Night",
    director: "Layla Hassan",
    image: "/images/film-poster-1.jpg",
  },
  {
    title: "Desert Roads",
    director: "Omar Khalil",
    image: "/images/film-poster-2.jpg",
  },
  {
    title: "Threads of Memory",
    director: "Fatima Al-Qasimi",
    image: "/images/film-poster-3.jpg",
  },
  {
    title: "Between Two Shores",
    director: "Ahmed Nasser",
    image: "/images/film-poster-4.jpg",
  },
]

export function FeaturedFilmsSection() {
  return (
    <section className="py-24 border-0" style={{ border: 'none', boxShadow: 'none', marginTop: 0 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Now Showing</p>
            <h2 className="font-libre-baskerville text-3xl sm:text-4xl font-bold text-champagne">
              Featured Films
            </h2>
          </div>
          <a
            href="/program"
            className="hidden sm:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <span className="text-sm font-medium">View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredFilms.map((film) => (
            <div
              key={film.title}
              className="group relative aspect-[2/3] overflow-hidden cursor-pointer"
            >
              <Image
                src={film.image || "/placeholder.svg"}
                alt={film.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eerie-black via-transparent to-transparent opacity-80" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="font-libre-baskerville text-lg sm:text-xl font-semibold text-champagne mb-1 group-hover:text-primary transition-colors">
                  {film.title}
                </h3>
                <p className="text-champagne/60 text-sm">Dir. {film.director}</p>
              </div>

              {/* Learn More */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 border border-primary text-primary text-sm font-medium">
                  Learn More
                </span>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/program"
          className="sm:hidden flex items-center justify-center gap-2 text-primary mt-8"
        >
          <span className="text-sm font-medium">View All Films</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
