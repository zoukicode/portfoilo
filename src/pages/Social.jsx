import { motion } from "framer-motion"
export function Social(){
    return(
        
        <div class="flex gap-3">
            {/* Instagram */}
            <motion.div
             initial={{ opacity: 0, y: 30 }}
            viewport={{amount:0.5}}
            whileInView={{ opacity: 1, y: 0}}
        transition={{ ease:"easeInOut", duration: 0.8 }}>
                <svg class="icone-conpetence" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#263b7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" stroke="#263b7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#263b7a"></rect> <rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#263b7a" stroke-linecap="round"></rect> </g></svg>
            </motion.div>
            {/* Tiktok */}
            <motion.div
             initial={{ opacity: 0, y: 30 }}
            viewport={{amount:0.5}}
            whileInView={{ opacity: 1, y: 0}}
        transition={{ ease:"easeInOut", duration: 0.8 }}>
                <svg class="icone-conpetence" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="#263b7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 12C8.34315 12 7 13.3431 7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15V6C13.3333 7 14.6 9 17 9" stroke="#263b7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </motion.div>
        </div>
    )
}