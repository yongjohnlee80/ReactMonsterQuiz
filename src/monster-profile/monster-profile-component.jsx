/**
 * Functional implementation of MonsterProfile component.
 * @param {} param0 
 * @returns 
 */

export const MonsterProfile = ({id}) => {
    return (
        <div key={id} className="profile-container">
            <img
                alt={`monster ${id}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
        </div>
    );
};