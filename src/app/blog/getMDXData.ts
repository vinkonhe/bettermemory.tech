import fs from "fs";
import path from "path";
import { getMDXFiles, readMDXFile } from "./utils";

export function getMDXData(dir: fs) {
    let mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        let { metadata, content } = readMDXFile(path.join(dir, file));
        let slug = path.basename(file, path.extname(file));

        return {
            metadata,
            slug,
            content,
        };
    });
}
