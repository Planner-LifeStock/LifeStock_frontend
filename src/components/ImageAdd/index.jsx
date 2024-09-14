import { useState } from 'react'
import styled from 'styled-components'
import { emptyImg } from '../../assets'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const ImgPreview = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 10px;
`

const FileName = styled.div`
  margin-top: 10px;
  font-size: 16px;
`

const FileInput = styled.input`
  display: none;
`

const FileInputLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background-color: #dfdfdf;
  border-radius: 5px;
  margin-top: 10px;

  cursor: pointer;
`

const ImgAdd = ({ img, setImg, fileName, setFileName }) => {
  const handleImageChange = event => {
    const file = event.target.files[0]
    if (file) {
      setFileName(file.name)
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImg(reader.result)
      }
    }
  }
  return (
    <Container>
      {img ? (
        <ImgPreview src={img} alt="Logo Preview" />
      ) : (
        <ImgPreview src={emptyImg} />
      )}
      <div>
        <FileName>
          파일명 : {fileName || '파일이 선택되지 않았습니다.'}
        </FileName>
        <FileInputLabel>
          <FileInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          파일 추가하기
        </FileInputLabel>
      </div>
    </Container>
  )
}

export default ImgAdd
