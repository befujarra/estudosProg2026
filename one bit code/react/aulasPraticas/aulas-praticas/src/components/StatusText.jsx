export default function Status() {
    const status = false
    return <h2 style={{
        color: status ? "green" : "red"
    }}>
        Current status: {status ? "ON" : "OFF"}
        </h2>
}