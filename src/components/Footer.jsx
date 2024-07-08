import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
        <ul className="d-flex justify-content-center align-items-center gap-5 list-unstyled mb-0">
            <li className="nav-link">SpaceX © 2024</li>
            <li className="nav-link"><a href="https://www.spacex.com/media/privacy_policy_spacex.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li className="nav-link"><a href="https://www.spacex.com/supplier/" rel="noopener noreferrer">Suppliers</a></li>
        </ul>
    </footer>
  )
}

export default Footer