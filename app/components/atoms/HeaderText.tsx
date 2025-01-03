interface HeaderTextProps {
    text: string;
}

const HeaderText = ({ text }: HeaderTextProps) => {
    return (
        <h2 className="text-s md:text-2xl mt-2">{text}</h2>
    );
};

export default HeaderText;
