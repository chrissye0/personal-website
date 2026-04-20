export default function Sidebar({ nav }) {
    return (
        <aside className="sidebar">
            {nav.map((navItem) => {
                return <a href={"#"+navItem} className="navItem" key={navItem}>{navItem}</a>
            })}
        </aside>
    )
}