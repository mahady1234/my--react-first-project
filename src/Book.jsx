
import Parts from './Part';
export default function Books({ name }) {
    return (
        <div>
            <h3>This is your all Books collection</h3>
            <h3>Books Collection:{name.length}</h3>
            <h3>Group:Science</h3>
            <ul>
                {name.map(element => <Parts key={element.id} element={element}></Parts>)}
            </ul>

        </div>
    )
}