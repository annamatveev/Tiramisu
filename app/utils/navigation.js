export default function hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
            window.scrollBy(0, -50);
        }
    }
}