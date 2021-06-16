import React from 'react'

export default function Projects({title,link, imageURL, isBig}) {
    return (

              <div class="card card-big" id={isBig ? "card-big" : ""}>
                    <div class="card-header">
                        <h3><a href="https://willsha90.github.io/horiseon-seo-optimization/">{title}</a>
                        </h3>
                        <div class="project-links"><a href={link}>GitHub Repo</a></div>
                    </div>
                    <img src={imageURL} alt="NYT or Not interface"/>
                </div>
 
    )
}
