

export default function Stat(props) {
    const c1Stats = props.stats[0];
    const c2Stats = props.stats[1];
  return (
    <>
        <table className="w-full shadow-[inset_0px_0px_25px_0px_rgb(0,0,0)]">
            <thead className="bg-amber-600 text-lg">
                <tr>
                    <th>Level</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img className="w-12 h-12"src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${props.images[0]}`} />
                    </td>
                    {c1Stats.map((stat, index) => {
                        return(
                            <td key={index}>{Math.floor(stat)}</td>
                        )
                    })}
                </tr>
                <tr>
                    <td>
                        <img className="w-12 h-12"src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${props.images[1]}`} />
                    </td>
                    {c2Stats.map((stat, index) => {
                        return(
                            <td key={index}>{Math.floor(stat)}</td>
                        )
                    })}
                </tr>
            </tbody>
        </table>
    </>
  )
}
