import React from 'react'
import { Phone } from 'lucide-react'
function Footer() {
  return (
<footer className="bg-white dark:bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">תום כהן</h2>
            <div className="flex justify-center gap-6">
              <a
                href="tel:+972504083588"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Developed by{" "}
              <a
                href="https://eyalyehiely.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Eyal Yehiely
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer