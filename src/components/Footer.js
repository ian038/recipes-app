import React from 'react'

export default function Footer() {
    return (
        <footer className="page-footer">
            <p>
            &copy; {new Date().getFullYear()} <span>Recipes App</span>. Built with{" "}
            <a href="https://www.gatsbyjs.com/">Gatsby</a>
            </p>
        </footer>
    )
}
