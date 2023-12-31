import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {
        name: 'Tuần 43',
        uv: 231,
        pv: 192,
    },
    {
        name: 'Tuần 44',
        uv: 157,
        pv: 190,
    },
    {
        name: 'Tuần 45',
        uv: 205,
        pv: 180,
    },
    {
        name: 'Tuần 46',
        uv: 321,
        pv: 310,
    },
    {
        name: 'Tuần 47',
        uv: 287,
        pv: 301,
    },
]

function DemandJobChart() {
    return (
        <AreaChart
            width={580}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="uv"
                name="Số việc được đăng"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
            />
            <Area
                type="monotone"
                dataKey="pv"
                name="Số lượt hợp tác"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
            />
        </AreaChart>
    )
}

export default DemandJobChart
