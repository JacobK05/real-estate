import React from 'react'

export default function header({links}) {
  return (
    <nav className="navbar">
          <div>
            <div>
                <ul className="link-comp">
                {links.map((link) => link)}
                </ul>
            </div>
          </div>
        </nav>
  )
}