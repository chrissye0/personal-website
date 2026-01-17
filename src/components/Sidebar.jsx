export default function Sidebar({ nav }) {
    return (
        <aside className="sidebar">
            {nav.map((navItem) => {
                return <a href={"#"+navItem} className="navItem">{navItem}</a>
            })}
        </aside>
    )
}