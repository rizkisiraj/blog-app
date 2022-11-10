const convertDate = (dateString:string) => {
   const date = new Date(dateString);
   return date.toLocaleDateString()
}

export default convertDate;