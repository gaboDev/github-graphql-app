import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from "./index";


describe('<SearchBar />', () => {
    const initialProps = {
        logo: 'img/github.png',
        onSearch: () => {},
        onChange: () => {},
        searchValue: 'reactjs'
    };
    const renderSearchBar = ({ logo, onSearch, onChange, searchValue } = initialProps) => (
        render(
            <SearchBar
                onChange={onChange}
                onSearch={onSearch}
                logo={logo}
                searchValue={searchValue}
            />
        )
    );
    it('should match snapshot', () => {
        const view = renderSearchBar();
        expect( view ).toMatchSnapshot();
    });
    it('should display an image', () => {
        renderSearchBar();
        const logo = screen.getByRole('img');
        expect( logo ).toBeInTheDocument();
    });
    it('should handle onChange event', () => {
        const onChange = jest.fn();
        renderSearchBar({ ...initialProps, onChange });
        const input = screen.getByRole("textbox");
        fireEvent.change(input, {target: { value: "Hello!" }});
        expect(onChange).toHaveBeenCalled();
    });
    it('should handle onSearch properly', () => {
        const searchValue = "reactjs";
        const onSearch = jest.fn((topic) => {
            expect(topic === searchValue).toBeTruthy();
        });
        renderSearchBar({ ...initialProps, onSearch, searchValue });
        const input = screen.getByRole("textbox");
        fireEvent.submit(input);
        expect(onSearch).toHaveBeenCalled();
    });
});