export const RECTANGLE = () => {
    return (
        <svg
            style={{
                transform: "translate(30px, 120px) rotate(0deg) scale(1, 1)",
                transformOrigin: "1px 1px",
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: "16px",
            }}
            width="300"
            height="280"
            viewBox="0 0 300 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 16C0 7.16344 7.16344 0 16 0L284 0C292.837 0 300 7.16344 300 16L300 264C300 272.837 292.837 280 284 280L16 280C7.16345 280 0 272.837 0 264L0 16Z"
                fill="rgba(12.000000234693289, 12.000000234693289, 15.000000055879354, 1)"
            />
        </svg>
    );
};