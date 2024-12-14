function compare(self, other){
    if (self >= other) return "text-green-500"
    else return "text-red-500"; 
}

function formatStat(title, stat) {
    if (title == "Attack Speed"){
        return Number((stat.toFixed(2)));
    } else {
        return Math.floor(stat);
    }
}

export default function Stat(props) {
    const c1Stats = props.stats[0];
    const c2Stats = props.stats[1];
  return (
    <>
        <div>
            <h2 className="text-3xl text-amber-600 px-2 pb-2">{props.title}</h2>
            <table className="overflow-hidden rounded-md w-full shadow-[inset_0px_0px_25px_0px_rgb(0,0,0)]">
                <thead className="bg-amber-600 text-lg">
                    <tr className="">
                        <th className="py-1">Level</th>
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
                            <img className="w-12 h-12 m-2 mx-auto"src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${props.images[0]}`} />
                        </td>
                        {c1Stats.map((stat, index) => {
                            return(
                                <td className={`text-base text-center ${compare(stat, c2Stats[index])}`} key={index}>{formatStat(props.title, stat)}</td>
                            )
                        })}
                    </tr>
                    <tr>
                        <td>
                            <img className="w-12 h-12 my-2 mx-auto"src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${props.images[1]}`} />
                        </td>
                        {c2Stats.map((stat, index) => {
                            return(
                                <td className={`text-base text-center ${compare(stat, c1Stats[index])}`} key={index}>{formatStat(props.title, stat)}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}
