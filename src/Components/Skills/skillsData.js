import React from 'react'

const skillsData = [
    {
        id: 1,
        img: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M5.641 22.569l-5.641 1.431 1.397-5.674 4.244 4.243zm-2.829-5.657l4.243 4.243 16.945-16.913-4.242-4.242-16.946 16.912zm14.114-2.783l-1.414 1.414.708.708 1.414-1.414 1.414 1.414-2.122 2.122.707.707 2.122-2.122 1.417 1.385-2.829 2.829-4.232-4.233-1.415 1.413 5.648 5.648 5.656-5.657-5.643-5.643-1.431 1.429zm-9.887-4.261l-4.21-4.21 2.828-2.829 1.369 1.401-2.121 2.121.707.707 2.121-2.122 1.414 1.415-1.414 1.414.707.707 1.414-1.414 1.432-1.429-5.629-5.629-5.657 5.657 5.623 5.624 1.416-1.413z" /></svg>,
        title: "Web Design"
    },
    {
        id: 2,
        img: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z" /></svg>,
        title: "Web Development"
    },
    {
        id: 3,
        img: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M10 3.002c4.411 0 8 2.849 8 6.35 0 3.035-3.029 6.311-7.925 6.311-1.58 0-2.718-.317-3.718-.561-.966.593-1.256.813-3.006 1.373.415-1.518.362-2.182.331-3.184-.837-1.001-1.682-2.069-1.682-3.939 0-3.501 3.589-6.35 8-6.35zm0-2.002c-5.281 0-10 3.526-10 8.352 0 1.711.615 3.391 1.705 4.695.047 1.527-.851 3.718-1.661 5.312 2.168-.391 5.252-1.258 6.649-2.115 1.181.289 2.312.421 3.382.421 5.903 0 9.925-4.038 9.925-8.313 0-4.852-4.751-8.352-10-8.352zm11.535 11.174c-.161.488-.361.961-.601 1.416 1.677 1.262 2.257 3.226.464 5.365-.021.745-.049 1.049.138 1.865-.892-.307-.979-.392-1.665-.813-2.127.519-4.265.696-6.089-.855-.562.159-1.145.278-1.74.364 1.513 1.877 4.298 2.897 7.577 2.1.914.561 2.933 1.127 4.352 1.385-.53-1.045-1.117-2.479-1.088-3.479 1.755-2.098 1.543-5.436-1.348-7.348zm-15.035-3.763c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071zm3.5 0c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071zm3.5 0c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071z" /></svg>,
        title: "Social Media"
    },
    {
        id: 4,
        img: <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.096 24h-13.19c-1.141 0-1.906-1.016-1.906-2 0-.884.576-1.59 1.314-1.883-.568-3.181 1.627-5.65 3.262-7.374.847-.892 1.646-1.736 1.635-2.279-.006-.272-.329-.623-.634-.623-.708 0-1.846 1.293-3.204 1.293-1.588 0-2.283-1.594-2.344-2.56-.053-.837.288-1.515.914-1.817 1.2-.58 1.558-1.494 1.904-2.379.188-.48.62-1.996 2.273-1.996 1.14 0 1.749.481 1.402-.54-.145-.426-.6-1.224-1.176-1.842 5.998.013 10.711 4.181 10.714 9.546 0 5.59-3.21 7.562-.894 10.466 1.203.118 1.834 1.032 1.834 1.988 0 .984-.764 2-1.904 2zm-12.848-3.004l-.339.004c-.459.005-.925.451-.925 1 0 .423.328 1 .922 1h13.19c.593 0 .921-.577.921-1 0-.442-.278-1-1.089-1h-12.68v-.004zm12.648-12.996c-.616-2.733-2.866-5.978-7.62-6.854 1.215 2.281-.506 2.494-1.515 2.313-1.483-.26-1.644.38-2 1.289-.357.913-.847 2.165-2.397 2.912-.727.352-.258 2.122.614 2.41.637.209 1.307-.177 1.952-.574.524-.322 1.068-.655 1.647-.655.836 0 1.597.78 1.617 1.6.019.96-.831 1.858-1.91 2.995-2.91 3.07-3.314 4.668-2.97 6.564h11.657c-.954-1.587-.723-2.953-.024-5h-1.343c-.239 0-.5-.189-.5-.5 0-.239.189-.5.5-.5h1.686c.107-.32.211-.652.307-1h-1.384c-.239 0-.5-.189-.5-.5s.26-.5.5-.5h1.622c.064-.318.117-.651.157-1h-1.391c-.311 0-.5-.26-.5-.5 0-.239.189-.5.5-.5h1.468l.007-.454c0-.176-.007-.359-.024-.546h-1.67c-.31 0-.5-.26-.5-.5 0-.239.19-.5.5-.5h1.514zm-9.112-1.101c-.78 0-1.416-.601-1.416-1.341 0-.741.636-1.342 1.416-1.342.781 0 1.416.601 1.416 1.342 0 .74-.635 1.341-1.416 1.341zm0-1.683c-.234 0-.431.157-.431.342 0 .185.197.341.431.341.234 0 .433-.156.433-.341 0-.185-.199-.342-.433-.342z" /></svg>,
        title: "Prototyping"
    },
    {
        id: 5,
        img: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-1.992c.001-2.079.997-3.826 1.968-5.513.912-1.585 1.774-3.083 1.774-4.753 0-3.108-2.517-4.734-5.004-4.734-2.483 0-4.996 1.626-4.996 4.734 0 1.67.862 3.168 1.774 4.753.971 1.687 1.966 3.434 1.967 5.513h-1.991c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4 11.766c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm0 2c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm-1.701 3.159c-.19.216-.465.341-.753.341h-1.093c-.288 0-.562-.125-.752-.341l-1.451-1.659h5.5l-1.451 1.659z" /></svg>,
        title: "Brand Identity"
    },
    {
        id: 6,
        img: <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.825 24h-15.825v-24h10.189c3.162 0 9.811 7.223 9.811 9.614v10.071l-2-2v-7.228c0-4.107-6-2.457-6-2.457s1.517-6-2.638-6h-7.362v20h11.825l2 2zm-2.026-4.858c-.799.542-1.762.858-2.799.858-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1-.294 1.932-.801 2.714l4.801 4.872-1.414 1.414-4.787-4.858zm-2.799-7.142c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" /></svg>,
        title: "SEO Optimisation"
    }
]

export default skillsData