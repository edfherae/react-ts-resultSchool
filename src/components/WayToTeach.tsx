export default function WayToTeach(props : {title : string, description: string}) {
  return <div className="card">
     <p className="text-bold">{props.title}</p>
     <p>{props.description}</p>
  </div>
}