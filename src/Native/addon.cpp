#include <iostream>
#include <tesseract/baseapi.h>
#include <leptonica/allheaders.h>

using namespace std;
using namespace tesseract;


void extractTextFromImage(const string &imagePath)
{
    TessBaseAPI *ocr = new TessBaseApi();

    if (ocr->Init(NULL, "eng"))
    {
        cerr << "could not initialize tesseract.\n";
        return;
    }
    pix *image = pixRead(imagePath.c_str());
    if (!image)
    {
        cerr << "Could not open image.\n";
        ocr->End();
        return;
    }
    ocr->SetImage(image);

    char *text = ocr->GetUTF8Text();
    std::cout << "Extracted Text:\n"
              << text << std::endl;
    delete[] text;
    pixDestroy(&image);
    ocr->End();
}

NODE_API_MODULE(addon, Init)