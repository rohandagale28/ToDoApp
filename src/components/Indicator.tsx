interface Props {
    count?: number | null
}
export const Indicator = ({ count }: Props) => {
    return (
        <>
            <div style={{ height: "22px", width: "44px", backgroundColor: "#d9d9d9", borderRadius: "32px", alignItems: "center", justifyContent: "center", display: 'flex', fontSize: ".875rem", border: "1px #69696934 solid" }}>{count}</div>
        </>
    )
}
