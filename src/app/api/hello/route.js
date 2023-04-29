import { NextResponse } from 'next/server';
import { connection } from "@/config/db";

export async function GET(request) {
  console.log(request);
  const data = await connection.promise().query('SELECT * FROM deals')
    .then(([rows, fields]) => {
      // console.log(rows)
      return rows;
    })
    .catch(console.log)
  // .then(() => connection.end());'
  // console.log(data)

  return NextResponse.json({ data })
}

export async function POST(request) {
  const req = await request.json();
  // console.log(req);
  const data = connection.promise().query('INSERT INTO deals (title,status,category,description,imagelink,dimername) VALUES (?,?,?,?,?,?)', [req.title, req.status, req.category, req.description, req.imagelink, req.dimername])
    .then(([rows, fields]) => {
      console.log(rows);
      return rows;
    }).catch(err => console.log(err))
  return NextResponse.json({ data })
}

export async function PUT(request) {
  const req = await request.json();
  // console.log(req);
  const data = connection.promise().query(`UPDATE deals SET title=?,status=?,category=?,description=?,imagelink=?,dimername=? WHERE id=?`, [req.title, req.status, req.category, req.description, req.imagelink, req.dimername, req.id])
    .then(([rows, fields]) => {
      console.log(rows);
      return rows;
    }).catch(err => console.log(err))
  return NextResponse.json({ data })
}

export async function DELETE(request) {
  const url = await new URL(request.url);
  let params = new URLSearchParams(url.search).get('id');
  console.log('req', params);
  const data = connection.promise().query(`DELETE FROM deals WHERE id=?`, [params])
    .then(([rows, fields]) => {
      console.log(rows);
      return rows;
    }).catch(err => console.log(err))
  return NextResponse.json({ data })
}