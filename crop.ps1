Add-Type -AssemblyName System.Drawing

$img1Path = "C:\Users\user\.gemini\antigravity-ide\brain\08bbcfae-cce1-4e0c-816c-b92032806737\media__1786953271032.jpg"
$img2Path = "C:\Users\user\.gemini\antigravity-ide\brain\08bbcfae-cce1-4e0c-816c-b92032806737\media__1786953271063.jpg"

$out1Path = "c:\Users\user\link-hub\brand-abdulloh.png"
$out2Path = "c:\Users\user\link-hub\brand-photobuy.png"

# Crop Abdulloh Barber Avatar with full bounds
$src1 = [System.Drawing.Image]::FromFile($img1Path)
$rect1 = New-Object System.Drawing.Rectangle(25, 95, 275, 275)
$bmp1 = New-Object System.Drawing.Bitmap(275, 275)
$g1 = [System.Drawing.Graphics]::FromImage($bmp1)
$g1.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g1.DrawImage($src1, (New-Object System.Drawing.Rectangle(0, 0, 275, 275)), $rect1, [System.Drawing.GraphicsUnit]::Pixel)
$g1.Dispose()
$src1.Dispose()
$bmp1.Save($out1Path, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp1.Dispose()

# Crop Photobuy Avatar with full bounds
$src2 = [System.Drawing.Image]::FromFile($img2Path)
$rect2 = New-Object System.Drawing.Rectangle(25, 115, 275, 275)
$bmp2 = New-Object System.Drawing.Bitmap(275, 275)
$g2 = [System.Drawing.Graphics]::FromImage($bmp2)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.DrawImage($src2, (New-Object System.Drawing.Rectangle(0, 0, 275, 275)), $rect2, [System.Drawing.GraphicsUnit]::Pixel)
$g2.Dispose()
$src2.Dispose()
$bmp2.Save($out2Path, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp2.Dispose()

Write-Host "Full avatars re-cropped successfully!"
