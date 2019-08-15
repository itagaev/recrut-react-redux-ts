import * as React from 'react';

export interface SearchBarProps {
    value: string,
    onChange(e: React.ChangeEvent<HTMLInputElement>): void,
    id: string,
    placeholder: string
}
 
const SearchBar: React.SFC<SearchBarProps> = (props) => {
    return ( 
        <div>
            <input className="form-control m-2" type="text" {...props} />
        </div>
     );
}
 
export default SearchBar;