import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container">
    <h1>Realworld 🤯 </h1>
    <p>Hello, I go on the internet by Reality Gamer (tbh kind of over this name might modify it soon) or Realboy.</p>
    <p>This is the home page for my various projects. I am working on a writing-machine which consists of several co-enveloping assemblages.</p>
    <p>Generally speaking I am interested in sociocultural structures and technology. I hope for my writing to establish lines to traverse upon which we may discover new evolutionary trajectories for these systems.</p>
    <p><a href="https://twitter.com/reality__gamer">Twitter</a></p>
    <p><a href="https://realitygamer.substack.com">Substack</a></p>
    <h3>AI Harmony <span style={{fontSize:'12px'}}>(for Harmless AI)</span></h3>
    <li>1. <a href="https://harmlessai.substack.com/p/the-dangers-of-a-safe-large-language">The Dangers of a Safe Large Language Model</a></li>
    <li>2. <a href="https://harmlessai.substack.com/p/is-gpt-3-a-wordcel-and-silicon-valleys">Is GPT-3 a Wordcel?</a></li>
    <li>3. Anti-Yudkowsky </li>
    <li>4. AGI Drugs You Should Try It</li>
    <li>5. Ccru's Numogram & the Cosmic Game</li>
    <h3>Corporate Surrealism <span style={{fontSize:'12px'}}>(in association with Harmless AI and WagonDAO)</span> </h3>
    <li>1. Towards a Form of Life</li>
    <li>2. The Corporate Surrealist Vibe Shift</li>
    <li>3. Capitalism vs. Anti-Capitalism</li>
    <li>4. On National Socialism</li>
    <li>5. Towards a Corporate Surrealist Ontology, through Bataille</li>
    <li>6. Towards a Corporate Surrealist Ontology, through Hjemslev</li>
    <h3>Web4</h3>
    <li>1. Rooms</li>
    <li>2. Towards an Ontology of Social Media</li> 
    <h3>Guattari Gang</h3>
    <li>🌏 Guattari Glossary</li>
    <li>1. Guattari Gang</li>
    <li>2. Reflections on Anti-Oedipus</li>

    <h3>Universalist Christianity <span style={{fontSize:'12px'}}>(for WagonDAO)</span></h3>
    <li>1. <a href="/universalist-christianity">Towards Universalist Christianity</a></li>
    </div>
  )
}

export const Head: HeadFC = () => <title>Realworld</title>

export default IndexPage

