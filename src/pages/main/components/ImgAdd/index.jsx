import styled from 'styled-components';
import { emptyImg } from '../../../../assets';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ImgPreview = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 10px;
`;

const FileName = styled.div`
  margin-top: 10px;
  font-size: ${props => props.theme.font.size.primary};
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background-color: #dfdfdf;
  border-radius: 5px;
  margin-top: 10px;

  cursor: pointer;
`;

const ImgAdd = ({ img, setImg, fileName, setFileName, setLogoFile }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // 파일 이름을 저장
      setImg(file); // 파일 객체를 저장
      setLogoFile(file);

      // 미리보기 URL 생성
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const previewUrl = reader.result; // Base64 URL로 변환된 미리보기용 URL
        setImg((prev) => ({ ...prev, previewUrl })); // 미리보기 URL만 추가
      };
    }
  };

  return (
    <Container>
      {/* 미리보기 이미지 표시 */}
      {img && img.previewUrl ? (
        <ImgPreview src={img.previewUrl} alt="Logo Preview" />
      ) : (
        <ImgPreview src={emptyImg} alt="Empty Preview" />
      )}
      <div>
        <FileName>파일명 : {fileName || '파일이 선택되지 않았습니다.'}</FileName>
        <FileInputLabel>
          <FileInput type="file" accept="image/*" onChange={handleImageChange} />
          파일 추가하기
        </FileInputLabel>
      </div>
    </Container>
  );
};

export default ImgAdd;