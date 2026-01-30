// app/api/login/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Define the path to your JSON file
    const filePath = path.join(process.cwd(), "data", "users.json");

    // Ensure the directory exists
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Read existing data or start with an empty array
    let users = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      users = JSON.parse(fileData || "[]");
    }

    // Add the new entry
    users.push({ email, password, timestamp: new Date().toISOString() });

    // Write back to the file
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return NextResponse.json(
      { message: "Data saved successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
